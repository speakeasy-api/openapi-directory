package shared

type Address struct {
	City    *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Phone   *string `json:"phone,omitempty"`
	State   *string `json:"state,omitempty"`
	Street  *string `json:"street,omitempty"`
	Zip     *string `json:"zip,omitempty"`
}
