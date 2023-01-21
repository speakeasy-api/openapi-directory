package shared

// CustomerGroup
// Represents a group of customer profiles.
//
// Customer groups can be created, be modified, and have their membership defined using
// the Customers API or within the Customer Directory in the Square Seller Dashboard or Point of Sale.
type CustomerGroup struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ID        *string `json:"id,omitempty"`
	Name      string  `json:"name"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
