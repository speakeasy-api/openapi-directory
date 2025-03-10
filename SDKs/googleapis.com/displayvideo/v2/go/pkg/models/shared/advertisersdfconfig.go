// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AdvertiserSdfConfig - Structured Data Files (SDF) settings of an advertiser.
type AdvertiserSdfConfig struct {
	// Whether or not this advertiser overrides the SDF configuration of its parent partner. By default, an advertiser inherits the SDF configuration from the parent partner. To override the partner configuration, set this field to `true` and provide the new configuration in sdfConfig.
	OverridePartnerSdfConfig *bool `json:"overridePartnerSdfConfig,omitempty"`
	// Structured Data File (SDF) related settings.
	SdfConfig *SdfConfig `json:"sdfConfig,omitempty"`
}
