package shared

// GoogleCloudKmsV1ExternalProtectionLevelOptions
// ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
type GoogleCloudKmsV1ExternalProtectionLevelOptions struct {
	EkmConnectionKeyPath *string `json:"ekmConnectionKeyPath,omitempty"`
	ExternalKeyURI       *string `json:"externalKeyUri,omitempty"`
}
