package shared

// GoogleCloudPaymentsResellerSubscriptionV1ProductPayload
// Specifies product specific payload.
type GoogleCloudPaymentsResellerSubscriptionV1ProductPayload struct {
	GoogleOnePayload *GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload `json:"googleOnePayload,omitempty"`
	YoutubePayload   *GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload   `json:"youtubePayload,omitempty"`
}
