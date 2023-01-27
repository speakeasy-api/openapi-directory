package shared

type GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum string

const (
	GoogleAuthenticationSettingsDedicatedDevicesAllowedEnumDedicatedDevicesAllowedUnspecified GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum = "dedicatedDevicesAllowedUnspecified"
	GoogleAuthenticationSettingsDedicatedDevicesAllowedEnumDisallowed                         GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum = "disallowed"
	GoogleAuthenticationSettingsDedicatedDevicesAllowedEnumAllowed                            GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum = "allowed"
)

type GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum string

const (
	GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnumGoogleAuthenticationRequiredUnspecified GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum = "googleAuthenticationRequiredUnspecified"
	GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnumNotRequired                             GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum = "notRequired"
	GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnumRequired                                GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum = "required"
)

// GoogleAuthenticationSettings
// Contains settings for Google-provided user authentication.
type GoogleAuthenticationSettings struct {
	DedicatedDevicesAllowed      *GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum      `json:"dedicatedDevicesAllowed,omitempty"`
	GoogleAuthenticationRequired *GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum `json:"googleAuthenticationRequired,omitempty"`
}
