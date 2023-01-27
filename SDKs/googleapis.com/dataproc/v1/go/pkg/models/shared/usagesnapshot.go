package shared

// UsageSnapshot
// The usage snaphot represents the resources consumed by a workload at a specified time.
type UsageSnapshot struct {
	MilliDcu         *string `json:"milliDcu,omitempty"`
	ShuffleStorageGb *string `json:"shuffleStorageGb,omitempty"`
	SnapshotTime     *string `json:"snapshotTime,omitempty"`
}
