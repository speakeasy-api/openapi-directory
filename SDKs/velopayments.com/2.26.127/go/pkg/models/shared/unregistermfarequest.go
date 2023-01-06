package shared

type UnregisterMfaRequestMfaTypeEnum string

const (
	UnregisterMFARequestMFATypeEnumYubikey UnregisterMfaRequestMfaTypeEnum = "YUBIKEY"
	UnregisterMFARequestMFATypeEnumTotp    UnregisterMfaRequestMfaTypeEnum = "TOTP"
)

type UnregisterMfaRequest struct {
	MfaType          UnregisterMfaRequestMfaTypeEnum `json:"mfaType"`
	VerificationCode *string                         `json:"verificationCode,omitempty"`
}
