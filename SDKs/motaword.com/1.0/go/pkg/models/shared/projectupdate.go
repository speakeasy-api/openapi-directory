// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ProjectUpdate struct {
	// Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'.
	CallbackURL *string `json:"callback_url,omitempty" multipartForm:"name=callback_url"`
	// Coupon code to redeem
	CouponCode *string `json:"coupon_code,omitempty" multipartForm:"name=coupon_code"`
	// Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced.
	Custom          []string `json:"custom,omitempty" multipartForm:"name=custom"`
	SourceLanguage  *string  `json:"source_language,omitempty" multipartForm:"name=source_language"`
	TargetLanguages []string `json:"target_languages[],omitempty" multipartForm:"name=target_languages[]"`
}
