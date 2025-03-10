package shared

type PhoneNumberEnumValidationErrorEnum string

const (
	PhoneNumberEnumValidationErrorEnumTooShort           PhoneNumberEnumValidationErrorEnum = "TOO_SHORT"
	PhoneNumberEnumValidationErrorEnumTooLong            PhoneNumberEnumValidationErrorEnum = "TOO_LONG"
	PhoneNumberEnumValidationErrorEnumInvalidButPossible PhoneNumberEnumValidationErrorEnum = "INVALID_BUT_POSSIBLE"
	PhoneNumberEnumValidationErrorEnumInvalidCountryCode PhoneNumberEnumValidationErrorEnum = "INVALID_COUNTRY_CODE"
	PhoneNumberEnumValidationErrorEnumInvalidLength      PhoneNumberEnumValidationErrorEnum = "INVALID_LENGTH"
	PhoneNumberEnumValidationErrorEnumNotANumber         PhoneNumberEnumValidationErrorEnum = "NOT_A_NUMBER"
)
