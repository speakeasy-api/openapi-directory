// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type AccountBidderLocation struct {
	// The maximum queries per second the Ad Exchange will send.
	MaximumQPS *int `json:"maximumQps,omitempty"`
	// The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:
	// - ASIA
	// - EUROPE
	// - US_EAST
	// - US_WEST
	Region *string `json:"region,omitempty"`
	// The URL to which the Ad Exchange will send bid requests.
	URL *string `json:"url,omitempty"`
}

// Account - Configuration data for an Ad Exchange buyer account.
type Account struct {
	// Your bidder locations that have distinct URLs.
	BidderLocation []AccountBidderLocation `json:"bidderLocation,omitempty"`
	// The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.
	CookieMatchingNid *string `json:"cookieMatchingNid,omitempty"`
	// The base URL used in cookie match requests.
	CookieMatchingURL *string `json:"cookieMatchingUrl,omitempty"`
	// Account id.
	ID *int `json:"id,omitempty"`
	// Resource type.
	Kind *string `json:"kind,omitempty"`
	// The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.
	MaximumActiveCreatives *int `json:"maximumActiveCreatives,omitempty"`
	// The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.
	MaximumTotalQPS *int `json:"maximumTotalQps,omitempty"`
	// The number of creatives that this account inserted or bid with in the last 30 days.
	NumberActiveCreatives *int `json:"numberActiveCreatives,omitempty"`
}
