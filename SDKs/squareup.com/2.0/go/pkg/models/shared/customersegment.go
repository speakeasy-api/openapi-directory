package shared

// CustomerSegment
// Represents a group of customer profiles that match one or more predefined filter criteria.
//
// Segments (also known as Smart Groups) are defined and created within the Customer Directory in the
// Square Seller Dashboard or Point of Sale.
type CustomerSegment struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ID        *string `json:"id,omitempty"`
	Name      string  `json:"name"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}
