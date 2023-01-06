package shared

type SelfMfaTypeUnregisterRequestMfaTypeEnum string

const (
	SelfMFATypeUnregisterRequestMFATypeEnumSms     SelfMfaTypeUnregisterRequestMfaTypeEnum = "SMS"
	SelfMFATypeUnregisterRequestMFATypeEnumYubikey SelfMfaTypeUnregisterRequestMfaTypeEnum = "YUBIKEY"
	SelfMFATypeUnregisterRequestMFATypeEnumTotp    SelfMfaTypeUnregisterRequestMfaTypeEnum = "TOTP"
)

type SelfMfaTypeUnregisterRequest struct {
	MfaType SelfMfaTypeUnregisterRequestMfaTypeEnum `json:"mfaType"`
}
