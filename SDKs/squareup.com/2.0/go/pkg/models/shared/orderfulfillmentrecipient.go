package shared

// OrderFulfillmentRecipient
// Contains information about the recipient of a fulfillment.
type OrderFulfillmentRecipient struct {
	Address      *Address `json:"address,omitempty"`
	CustomerID   *string  `json:"customer_id,omitempty"`
	DisplayName  *string  `json:"display_name,omitempty"`
	EmailAddress *string  `json:"email_address,omitempty"`
	PhoneNumber  *string  `json:"phone_number,omitempty"`
}
