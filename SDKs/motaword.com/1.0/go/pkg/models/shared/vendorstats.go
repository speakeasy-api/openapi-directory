package shared

type VendorStats struct {
	Earnings *VendorEarningStats `json:"earnings,omitempty"`
	Projects *VendorProjectStats `json:"projects,omitempty"`
	Words    *VendorWordStats    `json:"words,omitempty"`
}
