package shared

// LoyaltyAccountMapping
// Represents the mapping that associates a loyalty account with a buyer.
//
// Currently, a loyalty account can only be mapped to a buyer by phone number. For more information, see
// [Loyalty Overview](https://developer.squareup.com/docs/loyalty/overview).
type LoyaltyAccountMapping struct {
	CreatedAt   *string `json:"created_at,omitempty"`
	ID          *string `json:"id,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
}
