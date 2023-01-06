package shared

type MessageCode400AisEnum string

const (
	MessageCode400AISEnumFormatError            MessageCode400AisEnum = "FORMAT_ERROR"
	MessageCode400AISEnumParameterNotConsistent MessageCode400AisEnum = "PARAMETER_NOT_CONSISTENT"
	MessageCode400AISEnumParameterNotSupported  MessageCode400AisEnum = "PARAMETER_NOT_SUPPORTED"
	MessageCode400AISEnumServiceInvalid         MessageCode400AisEnum = "SERVICE_INVALID"
	MessageCode400AISEnumResourceUnknown        MessageCode400AisEnum = "RESOURCE_UNKNOWN"
	MessageCode400AISEnumResourceExpired        MessageCode400AisEnum = "RESOURCE_EXPIRED"
	MessageCode400AISEnumResourceBlocked        MessageCode400AisEnum = "RESOURCE_BLOCKED"
	MessageCode400AISEnumTimestampInvalid       MessageCode400AisEnum = "TIMESTAMP_INVALID"
	MessageCode400AISEnumPeriodInvalid          MessageCode400AisEnum = "PERIOD_INVALID"
	MessageCode400AISEnumScaMethodUnknown       MessageCode400AisEnum = "SCA_METHOD_UNKNOWN"
	MessageCode400AISEnumScaInvalid             MessageCode400AisEnum = "SCA_INVALID"
	MessageCode400AISEnumConsentUnknown         MessageCode400AisEnum = "CONSENT_UNKNOWN"
	MessageCode400AISEnumSessionsNotSupported   MessageCode400AisEnum = "SESSIONS_NOT_SUPPORTED"
)
