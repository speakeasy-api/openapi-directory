// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// APIV2010AccountCallCallFeedback - OK
type APIV2010AccountCallCallFeedback struct {
	// The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
	AccountSid *string `json:"account_sid,omitempty"`
	// The date that this resource was created, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
	DateCreated *string `json:"date_created,omitempty"`
	// The date that this resource was last updated, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
	DateUpdated *string `json:"date_updated,omitempty"`
	// A list of issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, `unsolicited-call`, or `one-way-audio`.
	Issues []CallFeedbackEnumIssuesEnum `json:"issues,omitempty"`
	// `1` to `5` quality score where `1` represents imperfect experience and `5` represents a perfect call.
	QualityScore *int64 `json:"quality_score,omitempty"`
	// A 34 character string that uniquely identifies this resource.
	Sid *string `json:"sid,omitempty"`
}
