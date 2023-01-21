package shared

// CatalogSubscriptionPlan
// Describes a subscription plan. For more information, see
// [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
type CatalogSubscriptionPlan struct {
	Name   string              `json:"name"`
	Phases []SubscriptionPhase `json:"phases"`
}
