package shared

type ValidateAddressEnum string

const (
	ValidateAddressEnumNoValidation     ValidateAddressEnum = "no_validation"
	ValidateAddressEnumValidateOnly     ValidateAddressEnum = "validate_only"
	ValidateAddressEnumValidateAndClean ValidateAddressEnum = "validate_and_clean"
)
