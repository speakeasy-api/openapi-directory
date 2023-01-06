package shared

type MessageCode401PiisEnum string

const (
	MessageCode401PIISEnumCertificateInvalid    MessageCode401PiisEnum = "CERTIFICATE_INVALID"
	MessageCode401PIISEnumRoleInvalid           MessageCode401PiisEnum = "ROLE_INVALID"
	MessageCode401PIISEnumCertificateExpired    MessageCode401PiisEnum = "CERTIFICATE_EXPIRED"
	MessageCode401PIISEnumCertificateBlocked    MessageCode401PiisEnum = "CERTIFICATE_BLOCKED"
	MessageCode401PIISEnumCertificateRevoke     MessageCode401PiisEnum = "CERTIFICATE_REVOKE"
	MessageCode401PIISEnumCertificateMissing    MessageCode401PiisEnum = "CERTIFICATE_MISSING"
	MessageCode401PIISEnumSignatureInvalid      MessageCode401PiisEnum = "SIGNATURE_INVALID"
	MessageCode401PIISEnumSignatureMissing      MessageCode401PiisEnum = "SIGNATURE_MISSING"
	MessageCode401PIISEnumCorporateIDInvalid    MessageCode401PiisEnum = "CORPORATE_ID_INVALID"
	MessageCode401PIISEnumPsuCredentialsInvalid MessageCode401PiisEnum = "PSU_CREDENTIALS_INVALID"
	MessageCode401PIISEnumConsentInvalid        MessageCode401PiisEnum = "CONSENT_INVALID"
	MessageCode401PIISEnumConsentExpired        MessageCode401PiisEnum = "CONSENT_EXPIRED"
	MessageCode401PIISEnumTokenUnknown          MessageCode401PiisEnum = "TOKEN_UNKNOWN"
	MessageCode401PIISEnumTokenInvalid          MessageCode401PiisEnum = "TOKEN_INVALID"
	MessageCode401PIISEnumTokenExpired          MessageCode401PiisEnum = "TOKEN_EXPIRED"
)
