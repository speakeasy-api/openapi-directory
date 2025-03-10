// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type OrderCustomerMarketingRightsInfo struct {
	// Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - "`denied`" - "`granted`"
	ExplicitMarketingPreference *string `json:"explicitMarketingPreference,omitempty"`
	// Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.
	LastUpdatedTimestamp *string `json:"lastUpdatedTimestamp,omitempty"`
	// Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account.
	MarketingEmailAddress *string `json:"marketingEmailAddress,omitempty"`
}
