package shared

type VendorProjectStats struct {
	Invited *int64 `json:"invited,omitempty"`
	Total   *int64 `json:"total,omitempty"`
	Worked  *int64 `json:"worked,omitempty"`
}
