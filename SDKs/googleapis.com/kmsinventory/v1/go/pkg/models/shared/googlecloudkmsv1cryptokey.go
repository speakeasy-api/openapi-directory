package shared

type GoogleCloudKmsV1CryptoKeyPurposeEnum string

const (
	GoogleCloudKmsV1CryptoKeyPurposeEnumCryptoKeyPurposeUnspecified GoogleCloudKmsV1CryptoKeyPurposeEnum = "CRYPTO_KEY_PURPOSE_UNSPECIFIED"
	GoogleCloudKmsV1CryptoKeyPurposeEnumEncryptDecrypt              GoogleCloudKmsV1CryptoKeyPurposeEnum = "ENCRYPT_DECRYPT"
	GoogleCloudKmsV1CryptoKeyPurposeEnumAsymmetricSign              GoogleCloudKmsV1CryptoKeyPurposeEnum = "ASYMMETRIC_SIGN"
	GoogleCloudKmsV1CryptoKeyPurposeEnumAsymmetricDecrypt           GoogleCloudKmsV1CryptoKeyPurposeEnum = "ASYMMETRIC_DECRYPT"
	GoogleCloudKmsV1CryptoKeyPurposeEnumMac                         GoogleCloudKmsV1CryptoKeyPurposeEnum = "MAC"
)

// GoogleCloudKmsV1CryptoKey
// A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
type GoogleCloudKmsV1CryptoKey struct {
	CreateTime               *string                                   `json:"createTime,omitempty"`
	CryptoKeyBackend         *string                                   `json:"cryptoKeyBackend,omitempty"`
	DestroyScheduledDuration *string                                   `json:"destroyScheduledDuration,omitempty"`
	ImportOnly               *bool                                     `json:"importOnly,omitempty"`
	Labels                   map[string]string                         `json:"labels,omitempty"`
	Name                     *string                                   `json:"name,omitempty"`
	NextRotationTime         *string                                   `json:"nextRotationTime,omitempty"`
	Primary                  *GoogleCloudKmsV1CryptoKeyVersion         `json:"primary,omitempty"`
	Purpose                  *GoogleCloudKmsV1CryptoKeyPurposeEnum     `json:"purpose,omitempty"`
	RotationPeriod           *string                                   `json:"rotationPeriod,omitempty"`
	VersionTemplate          *GoogleCloudKmsV1CryptoKeyVersionTemplate `json:"versionTemplate,omitempty"`
}
