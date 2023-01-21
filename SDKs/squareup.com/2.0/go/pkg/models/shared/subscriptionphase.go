package shared

// SubscriptionPhase
// Describes a phase in a subscription plan. For more information, see
// [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
type SubscriptionPhase struct {
	Cadence             string  `json:"cadence"`
	Ordinal             *int64  `json:"ordinal,omitempty"`
	Periods             *int64  `json:"periods,omitempty"`
	RecurringPriceMoney Money   `json:"recurring_price_money"`
	UID                 *string `json:"uid,omitempty"`
}
