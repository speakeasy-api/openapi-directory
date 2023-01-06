package shared

type MessageCode401SbsEnum string

const (
	MessageCode401SBSEnumCertificateInvalid    MessageCode401SbsEnum = "CERTIFICATE_INVALID"
	MessageCode401SBSEnumRoleInvalid           MessageCode401SbsEnum = "ROLE_INVALID"
	MessageCode401SBSEnumCertificateExpired    MessageCode401SbsEnum = "CERTIFICATE_EXPIRED"
	MessageCode401SBSEnumCertificateBlocked    MessageCode401SbsEnum = "CERTIFICATE_BLOCKED"
	MessageCode401SBSEnumCertificateRevoke     MessageCode401SbsEnum = "CERTIFICATE_REVOKE"
	MessageCode401SBSEnumCertificateMissing    MessageCode401SbsEnum = "CERTIFICATE_MISSING"
	MessageCode401SBSEnumSignatureInvalid      MessageCode401SbsEnum = "SIGNATURE_INVALID"
	MessageCode401SBSEnumSignatureMissing      MessageCode401SbsEnum = "SIGNATURE_MISSING"
	MessageCode401SBSEnumCorporateIDInvalid    MessageCode401SbsEnum = "CORPORATE_ID_INVALID"
	MessageCode401SBSEnumPsuCredentialsInvalid MessageCode401SbsEnum = "PSU_CREDENTIALS_INVALID"
	MessageCode401SBSEnumConsentInvalid        MessageCode401SbsEnum = "CONSENT_INVALID"
	MessageCode401SBSEnumConsentExpired        MessageCode401SbsEnum = "CONSENT_EXPIRED"
	MessageCode401SBSEnumTokenUnknown          MessageCode401SbsEnum = "TOKEN_UNKNOWN"
	MessageCode401SBSEnumTokenInvalid          MessageCode401SbsEnum = "TOKEN_INVALID"
	MessageCode401SBSEnumTokenExpired          MessageCode401SbsEnum = "TOKEN_EXPIRED"
)
