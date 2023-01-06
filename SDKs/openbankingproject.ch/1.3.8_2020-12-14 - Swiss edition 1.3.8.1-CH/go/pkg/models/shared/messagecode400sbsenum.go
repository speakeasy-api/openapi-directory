package shared

type MessageCode400SbsEnum string

const (
	MessageCode400SBSEnumFormatError            MessageCode400SbsEnum = "FORMAT_ERROR"
	MessageCode400SBSEnumParameterNotConsistent MessageCode400SbsEnum = "PARAMETER_NOT_CONSISTENT"
	MessageCode400SBSEnumParameterNotSupported  MessageCode400SbsEnum = "PARAMETER_NOT_SUPPORTED"
	MessageCode400SBSEnumServiceInvalid         MessageCode400SbsEnum = "SERVICE_INVALID"
	MessageCode400SBSEnumResourceUnknown        MessageCode400SbsEnum = "RESOURCE_UNKNOWN"
	MessageCode400SBSEnumResourceExpired        MessageCode400SbsEnum = "RESOURCE_EXPIRED"
	MessageCode400SBSEnumResourceBlocked        MessageCode400SbsEnum = "RESOURCE_BLOCKED"
	MessageCode400SBSEnumTimestampInvalid       MessageCode400SbsEnum = "TIMESTAMP_INVALID"
	MessageCode400SBSEnumPeriodInvalid          MessageCode400SbsEnum = "PERIOD_INVALID"
	MessageCode400SBSEnumScaMethodUnknown       MessageCode400SbsEnum = "SCA_METHOD_UNKNOWN"
	MessageCode400SBSEnumScaInvalid             MessageCode400SbsEnum = "SCA_INVALID"
	MessageCode400SBSEnumConsentUnknown         MessageCode400SbsEnum = "CONSENT_UNKNOWN"
	MessageCode400SBSEnumReferenceMixInvalid    MessageCode400SbsEnum = "REFERENCE_MIX_INVALID"
)
