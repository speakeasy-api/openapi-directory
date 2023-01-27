package shared

// PersistentDirectory
// A directory to persist across workstation sessions.
type PersistentDirectory struct {
	GcePd     *GceRegionalPersistentDisk `json:"gcePd,omitempty"`
	MountPath *string                    `json:"mountPath,omitempty"`
}
