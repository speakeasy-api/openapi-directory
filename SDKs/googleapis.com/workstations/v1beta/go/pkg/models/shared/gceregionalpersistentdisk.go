package shared

type GceRegionalPersistentDiskReclaimPolicyEnum string

const (
	GceRegionalPersistentDiskReclaimPolicyEnumReclaimPolicyUnspecified GceRegionalPersistentDiskReclaimPolicyEnum = "RECLAIM_POLICY_UNSPECIFIED"
	GceRegionalPersistentDiskReclaimPolicyEnumDelete                   GceRegionalPersistentDiskReclaimPolicyEnum = "DELETE"
	GceRegionalPersistentDiskReclaimPolicyEnumRetain                   GceRegionalPersistentDiskReclaimPolicyEnum = "RETAIN"
)

// GceRegionalPersistentDisk
// A PersistentDirectory backed by a Compute Engine regional persistent disk.
type GceRegionalPersistentDisk struct {
	DiskType      *string                                     `json:"diskType,omitempty"`
	FsType        *string                                     `json:"fsType,omitempty"`
	ReclaimPolicy *GceRegionalPersistentDiskReclaimPolicyEnum `json:"reclaimPolicy,omitempty"`
	SizeGb        *int32                                      `json:"sizeGb,omitempty"`
}
