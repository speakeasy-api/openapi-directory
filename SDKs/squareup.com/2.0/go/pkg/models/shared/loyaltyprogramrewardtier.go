package shared

// LoyaltyProgramRewardTier
// Represents a reward tier in a loyalty program. A reward tier defines how buyers can redeem points for a reward, such as the number of points required and the value and scope of the discount. A loyalty program can offer multiple reward tiers.
type LoyaltyProgramRewardTier struct {
	CreatedAt            string                         `json:"created_at"`
	Definition           LoyaltyProgramRewardDefinition `json:"definition"`
	ID                   string                         `json:"id"`
	Name                 string                         `json:"name"`
	Points               int64                          `json:"points"`
	PricingRuleReference *CatalogObjectReference        `json:"pricing_rule_reference,omitempty"`
}
