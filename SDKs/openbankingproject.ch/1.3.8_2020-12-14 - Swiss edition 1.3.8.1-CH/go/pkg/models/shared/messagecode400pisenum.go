package shared

type MessageCode400PisEnum string

const (
	MessageCode400PISEnumFormatError            MessageCode400PisEnum = "FORMAT_ERROR"
	MessageCode400PISEnumParameterNotConsistent MessageCode400PisEnum = "PARAMETER_NOT_CONSISTENT"
	MessageCode400PISEnumParameterNotSupported  MessageCode400PisEnum = "PARAMETER_NOT_SUPPORTED"
	MessageCode400PISEnumServiceInvalid         MessageCode400PisEnum = "SERVICE_INVALID"
	MessageCode400PISEnumResourceUnknown        MessageCode400PisEnum = "RESOURCE_UNKNOWN"
	MessageCode400PISEnumResourceExpired        MessageCode400PisEnum = "RESOURCE_EXPIRED"
	MessageCode400PISEnumResourceBlocked        MessageCode400PisEnum = "RESOURCE_BLOCKED"
	MessageCode400PISEnumTimestampInvalid       MessageCode400PisEnum = "TIMESTAMP_INVALID"
	MessageCode400PISEnumPeriodInvalid          MessageCode400PisEnum = "PERIOD_INVALID"
	MessageCode400PISEnumScaMethodUnknown       MessageCode400PisEnum = "SCA_METHOD_UNKNOWN"
	MessageCode400PISEnumScaInvalid             MessageCode400PisEnum = "SCA_INVALID"
	MessageCode400PISEnumConsentUnknown         MessageCode400PisEnum = "CONSENT_UNKNOWN"
	MessageCode400PISEnumPaymentFailed          MessageCode400PisEnum = "PAYMENT_FAILED"
	MessageCode400PISEnumExecutionDateInvalid   MessageCode400PisEnum = "EXECUTION_DATE_INVALID"
)
