package shared

type Stats struct {
	Client *ClientStats `json:"client,omitempty"`
	Vendor *VendorStats `json:"vendor,omitempty"`
}
