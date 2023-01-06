package shared

type MessageCode401AisEnum string

const (
	MessageCode401AISEnumCertificateInvalid    MessageCode401AisEnum = "CERTIFICATE_INVALID"
	MessageCode401AISEnumRoleInvalid           MessageCode401AisEnum = "ROLE_INVALID"
	MessageCode401AISEnumCertificateExpired    MessageCode401AisEnum = "CERTIFICATE_EXPIRED"
	MessageCode401AISEnumCertificateBlocked    MessageCode401AisEnum = "CERTIFICATE_BLOCKED"
	MessageCode401AISEnumCertificateRevoke     MessageCode401AisEnum = "CERTIFICATE_REVOKE"
	MessageCode401AISEnumCertificateMissing    MessageCode401AisEnum = "CERTIFICATE_MISSING"
	MessageCode401AISEnumSignatureInvalid      MessageCode401AisEnum = "SIGNATURE_INVALID"
	MessageCode401AISEnumSignatureMissing      MessageCode401AisEnum = "SIGNATURE_MISSING"
	MessageCode401AISEnumCorporateIDInvalid    MessageCode401AisEnum = "CORPORATE_ID_INVALID"
	MessageCode401AISEnumPsuCredentialsInvalid MessageCode401AisEnum = "PSU_CREDENTIALS_INVALID"
	MessageCode401AISEnumConsentInvalid        MessageCode401AisEnum = "CONSENT_INVALID"
	MessageCode401AISEnumConsentExpired        MessageCode401AisEnum = "CONSENT_EXPIRED"
	MessageCode401AISEnumTokenUnknown          MessageCode401AisEnum = "TOKEN_UNKNOWN"
	MessageCode401AISEnumTokenInvalid          MessageCode401AisEnum = "TOKEN_INVALID"
	MessageCode401AISEnumTokenExpired          MessageCode401AisEnum = "TOKEN_EXPIRED"
)
