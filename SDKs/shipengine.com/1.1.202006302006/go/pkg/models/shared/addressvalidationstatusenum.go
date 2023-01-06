package shared

type AddressValidationStatusEnum string

const (
	AddressValidationStatusEnumUnverified AddressValidationStatusEnum = "unverified"
	AddressValidationStatusEnumVerified   AddressValidationStatusEnum = "verified"
	AddressValidationStatusEnumWarning    AddressValidationStatusEnum = "warning"
	AddressValidationStatusEnumError      AddressValidationStatusEnum = "error"
)
