// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// IdentityVerificationRetryRequest - Request input for retrying an identity verification attempt
type IdentityVerificationRetryRequest struct {
	// Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
	ClientID *string `json:"client_id,omitempty"`
	// An identifier to help you connect this object to your internal systems. For example, your database ID corresponding to this object.
	ClientUserID string `json:"client_user_id"`
	// Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
	Secret *string `json:"secret,omitempty"`
	// Instructions for the `custom` retry strategy specifying which steps should be required or skipped.
	//
	//
	// Note:
	//
	//
	// This field must be provided when the retry strategy is `custom` and must be omitted otherwise.
	//
	// Custom retries override settings in your Plaid Template. For example, if your Plaid Template has `verify_sms` disabled, a custom retry with `verify_sms` enabled will still require the step.
	//
	// The `selfie_check` step is currently not supported on the sandbox server. Sandbox requests will silently disable the `selfie_check` step when provided.
	Steps *IdentityVerificationRetryRequestStepsObject `json:"steps,omitempty"`
	// An instruction specifying what steps the new Identity Verification attempt should require the user to complete:
	//
	//
	// `reset` - Restart the user at the beginning of the session, regardless of whether they successfully completed part of their previous session.
	//
	// `incomplete` - Start the new session at the step that the user failed in the previous session, skipping steps that have already been successfully completed.
	//
	// `infer` - If the most recent Identity Verification attempt associated with the given `client_user_id` has a status of `failed` or `expired`, retry using the `incomplete` strategy. Otherwise, use the `reset` strategy.
	//
	// `custom` - Start the new session with a custom configuration, specified by the value of the `steps` field
	//
	// Note:
	//
	// The `incomplete` strategy cannot be applied if the session's failing step is `screening` or `risk_check`.
	//
	// The `infer` strategy cannot be applied if the session's status is still `active`
	Strategy StrategyEnum `json:"strategy"`
	// ID of the associated Identity Verification template.
	TemplateID string `json:"template_id"`
}
