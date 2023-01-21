package shared

// Transaction
// Represents a transaction processed with Square, either with the
// Connect API or with Square Point of Sale.
//
// The `tenders` field of this object lists all methods of payment used to pay in
// the transaction.
type Transaction struct {
	ClientID        *string  `json:"client_id,omitempty"`
	CreatedAt       *string  `json:"created_at,omitempty"`
	ID              *string  `json:"id,omitempty"`
	LocationID      *string  `json:"location_id,omitempty"`
	OrderID         *string  `json:"order_id,omitempty"`
	Product         *string  `json:"product,omitempty"`
	ReferenceID     *string  `json:"reference_id,omitempty"`
	Refunds         []Refund `json:"refunds,omitempty"`
	ShippingAddress *Address `json:"shipping_address,omitempty"`
	Tenders         []Tender `json:"tenders,omitempty"`
}
