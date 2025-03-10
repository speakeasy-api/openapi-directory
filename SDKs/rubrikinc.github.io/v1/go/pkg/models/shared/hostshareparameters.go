// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type HostShareParameters struct {
	// Indicates if Changelist is enabled on Isilon NAS share. When this value is 'true', metadata fetches during backup operations use the Isilon Changelist feature. The Changelist feature improves incremental backup performance by tracking the difference between two snapshots, reducing the metadata scanning time during a backup job.
	IsIsilonChangelistEnabled *bool `json:"isIsilonChangelistEnabled,omitempty"`
	// Indicates if SnapDiff is enabled on NetApp NAS share. When this value is 'true', metadata fetches during backup operations use the NetApp SnapDiff feature. The SnapDiff feature improves incremental backup performance by tracking the difference between two snapshots, reducing the metadata scanning time during a backup job.
	IsNetAppSnapDiffEnabled *bool `json:"isNetAppSnapDiffEnabled,omitempty"`
	// Indicates whether the share is on a SnapMirror destination volume on a NetApp NAS share. When this value is 'true', fileset backup operations pick the latest Netapp snapshot on the volume, subject to the configured label matching. During share registration, Rubrik checks with NetApp NAS to find out whether the share is on SnapMirror destination and sets this parameter.
	IsOnNetAppSnapMirrorDestVolume *bool `json:"isOnNetAppSnapMirrorDestVolume,omitempty"`
}
