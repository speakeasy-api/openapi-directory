package shared

type BillingAddress struct {
	City    *string `json:"city,omitempty"`
	Country *string `json:"country,omitempty"`
	Name    *string `json:"name,omitempty"`
	Phone   *string `json:"phone,omitempty"`
	State   *string `json:"state,omitempty"`
	Street  *string `json:"street,omitempty"`
	Zip     *string `json:"zip,omitempty"`
}
