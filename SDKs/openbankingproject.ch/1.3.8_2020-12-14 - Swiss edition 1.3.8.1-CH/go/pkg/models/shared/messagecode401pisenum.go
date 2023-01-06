package shared

type MessageCode401PisEnum string

const (
	MessageCode401PISEnumCertificateInvalid    MessageCode401PisEnum = "CERTIFICATE_INVALID"
	MessageCode401PISEnumRoleInvalid           MessageCode401PisEnum = "ROLE_INVALID"
	MessageCode401PISEnumCertificateExpired    MessageCode401PisEnum = "CERTIFICATE_EXPIRED"
	MessageCode401PISEnumCertificateBlocked    MessageCode401PisEnum = "CERTIFICATE_BLOCKED"
	MessageCode401PISEnumCertificateRevoke     MessageCode401PisEnum = "CERTIFICATE_REVOKE"
	MessageCode401PISEnumCertificateMissing    MessageCode401PisEnum = "CERTIFICATE_MISSING"
	MessageCode401PISEnumSignatureInvalid      MessageCode401PisEnum = "SIGNATURE_INVALID"
	MessageCode401PISEnumSignatureMissing      MessageCode401PisEnum = "SIGNATURE_MISSING"
	MessageCode401PISEnumCorporateIDInvalid    MessageCode401PisEnum = "CORPORATE_ID_INVALID"
	MessageCode401PISEnumPsuCredentialsInvalid MessageCode401PisEnum = "PSU_CREDENTIALS_INVALID"
	MessageCode401PISEnumConsentInvalid        MessageCode401PisEnum = "CONSENT_INVALID"
	MessageCode401PISEnumConsentExpired        MessageCode401PisEnum = "CONSENT_EXPIRED"
	MessageCode401PISEnumTokenUnknown          MessageCode401PisEnum = "TOKEN_UNKNOWN"
	MessageCode401PISEnumTokenInvalid          MessageCode401PisEnum = "TOKEN_INVALID"
	MessageCode401PISEnumTokenExpired          MessageCode401PisEnum = "TOKEN_EXPIRED"
	MessageCode401PISEnumRequiredKidMissing    MessageCode401PisEnum = "REQUIRED_KID_MISSING"
)
