// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CardPaymentTimeline - The timeline for card payments.
type CardPaymentTimeline struct {
	// The timestamp when the payment was authorized, in RFC 3339 format.
	AuthorizedAt *string `json:"authorized_at,omitempty"`
	// The timestamp when the payment was captured, in RFC 3339 format.
	CapturedAt *string `json:"captured_at,omitempty"`
	// The timestamp when the payment was voided, in RFC 3339 format.
	VoidedAt *string `json:"voided_at,omitempty"`
}
