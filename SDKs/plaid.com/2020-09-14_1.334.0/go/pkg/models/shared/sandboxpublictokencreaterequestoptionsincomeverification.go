// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SandboxPublicTokenCreateRequestOptionsIncomeVerification - A set of parameters for income verification options. This field is required if `income_verification` is included in the `initial_products` array.
type SandboxPublicTokenCreateRequestOptionsIncomeVerification struct {
	// Specifies options for Bank Income. This field is required if `income_verification` is included in the `initial_products` array and `bank` is specified in `income_source_types`.
	BankIncome *SandboxPublicTokenCreateRequestIncomeVerificationBankIncome `json:"bank_income,omitempty"`
	// The types of source income data that users will be permitted to share. Options include `bank` and `payroll`. Currently you can only specify one of these options.
	IncomeSourceTypes []IncomeVerificationSourceTypeEnum `json:"income_source_types,omitempty"`
}
