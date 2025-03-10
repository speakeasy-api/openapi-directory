// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// LocalizationSettings - Localization settings for reports, such as currency and language. It affects how metrics are calculated.
type LocalizationSettings struct {
	// Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified.
	CurrencyCode *string `json:"currencyCode,omitempty"`
	// Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified.
	LanguageCode *string `json:"languageCode,omitempty"`
}
