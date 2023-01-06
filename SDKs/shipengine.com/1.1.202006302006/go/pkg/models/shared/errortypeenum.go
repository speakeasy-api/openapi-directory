package shared

type ErrorTypeEnum string

const (
	ErrorTypeEnumAccountStatus ErrorTypeEnum = "account_status"
	ErrorTypeEnumBusinessRules ErrorTypeEnum = "business_rules"
	ErrorTypeEnumValidation    ErrorTypeEnum = "validation"
	ErrorTypeEnumSecurity      ErrorTypeEnum = "security"
	ErrorTypeEnumSystem        ErrorTypeEnum = "system"
	ErrorTypeEnumIntegrations  ErrorTypeEnum = "integrations"
)
