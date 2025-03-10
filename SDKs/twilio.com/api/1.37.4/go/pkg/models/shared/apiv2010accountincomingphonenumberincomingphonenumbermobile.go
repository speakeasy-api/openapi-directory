package shared

// APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities
// Indicate if a phone can receive calls or messages
type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities struct {
	Fax   *bool `json:"fax,omitempty"`
	Mms   *bool `json:"mms,omitempty"`
	Sms   *bool `json:"sms,omitempty"`
	Voice *bool `json:"voice,omitempty"`
}

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum string

const (
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnumHead   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum = "HEAD"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnumGet    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum = "GET"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnumPost   APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum = "POST"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnumPatch  APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum = "PATCH"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnumPut    APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum = "PUT"
	APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnumDelete APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum = "DELETE"
)

type APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile struct {
	AccountSid             *string                                                                              `json:"account_sid,omitempty"`
	AddressRequirements    *IncomingPhoneNumberMobileEnumAddressRequirementEnum                                 `json:"address_requirements,omitempty"`
	AddressSid             *string                                                                              `json:"address_sid,omitempty"`
	APIVersion             *string                                                                              `json:"api_version,omitempty"`
	Beta                   *bool                                                                                `json:"beta,omitempty"`
	BundleSid              *string                                                                              `json:"bundle_sid,omitempty"`
	Capabilities           *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities             `json:"capabilities,omitempty"`
	DateCreated            *string                                                                              `json:"date_created,omitempty"`
	DateUpdated            *string                                                                              `json:"date_updated,omitempty"`
	EmergencyAddressSid    *string                                                                              `json:"emergency_address_sid,omitempty"`
	EmergencyAddressStatus *IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum                             `json:"emergency_address_status,omitempty"`
	EmergencyStatus        *IncomingPhoneNumberMobileEnumEmergencyStatusEnum                                    `json:"emergency_status,omitempty"`
	FriendlyName           *string                                                                              `json:"friendly_name,omitempty"`
	IdentitySid            *string                                                                              `json:"identity_sid,omitempty"`
	Origin                 *string                                                                              `json:"origin,omitempty"`
	PhoneNumber            *string                                                                              `json:"phone_number,omitempty"`
	Sid                    *string                                                                              `json:"sid,omitempty"`
	SmsApplicationSid      *string                                                                              `json:"sms_application_sid,omitempty"`
	SmsFallbackMethod      *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum    `json:"sms_fallback_method,omitempty"`
	SmsFallbackURL         *string                                                                              `json:"sms_fallback_url,omitempty"`
	SmsMethod              *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum            `json:"sms_method,omitempty"`
	SmsURL                 *string                                                                              `json:"sms_url,omitempty"`
	Status                 *string                                                                              `json:"status,omitempty"`
	StatusCallback         *string                                                                              `json:"status_callback,omitempty"`
	StatusCallbackMethod   *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum `json:"status_callback_method,omitempty"`
	TrunkSid               *string                                                                              `json:"trunk_sid,omitempty"`
	URI                    *string                                                                              `json:"uri,omitempty"`
	VoiceApplicationSid    *string                                                                              `json:"voice_application_sid,omitempty"`
	VoiceCallerIDLookup    *bool                                                                                `json:"voice_caller_id_lookup,omitempty"`
	VoiceFallbackMethod    *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum  `json:"voice_fallback_method,omitempty"`
	VoiceFallbackURL       *string                                                                              `json:"voice_fallback_url,omitempty"`
	VoiceMethod            *APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum          `json:"voice_method,omitempty"`
	VoiceReceiveMode       *IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum                                   `json:"voice_receive_mode,omitempty"`
	VoiceURL               *string                                                                              `json:"voice_url,omitempty"`
}
