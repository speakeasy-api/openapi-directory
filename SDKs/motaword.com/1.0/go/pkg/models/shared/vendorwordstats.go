package shared

type VendorWordStats struct {
	Approved   *int64 `json:"approved,omitempty"`
	Translated *int64 `json:"translated,omitempty"`
}
