package shared

// LoyaltyProgramRewardDefinition
// Provides details about the reward tier discount. DEPRECATED at version 2020-12-16. Discount details
// are now defined using a catalog pricing rule and other catalog objects. For more information, see
// [Get discount details for the reward](https://developer.squareup.com/docs/loyalty-api/overview#get-discount-details).
type LoyaltyProgramRewardDefinition struct {
	CatalogObjectIds   []string `json:"catalog_object_ids,omitempty"`
	DiscountType       string   `json:"discount_type"`
	FixedDiscountMoney *Money   `json:"fixed_discount_money,omitempty"`
	MaxDiscountMoney   *Money   `json:"max_discount_money,omitempty"`
	PercentageDiscount *string  `json:"percentage_discount,omitempty"`
	Scope              string   `json:"scope"`
}
