package shared

type MfaTypeEnum string

const (
	MFATypeEnumSms     MfaTypeEnum = "SMS"
	MFATypeEnumYubikey MfaTypeEnum = "YUBIKEY"
	MFATypeEnumTotp    MfaTypeEnum = "TOTP"
)
