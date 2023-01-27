package shared

type GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum string

const (
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumCryptoKeyVersionAlgorithmUnspecified GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumGoogleSymmetricEncryption            GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "GOOGLE_SYMMETRIC_ENCRYPTION"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPss2048Sha256                 GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_2048_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPss3072Sha256                 GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_3072_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPss4096Sha256                 GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPss4096Sha512                 GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPkcs12048Sha256               GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_2048_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPkcs13072Sha256               GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_3072_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPkcs14096Sha256               GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignPkcs14096Sha512               GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignRawPkcs12048                  GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_2048"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignRawPkcs13072                  GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_3072"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaSignRawPkcs14096                  GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_4096"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaDecryptOaep2048Sha256             GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaDecryptOaep3072Sha256             GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaDecryptOaep4096Sha256             GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaDecryptOaep4096Sha512             GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaDecryptOaep2048Sha1               GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaDecryptOaep3072Sha1               GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumRsaDecryptOaep4096Sha1               GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumEcSignP256Sha256                     GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "EC_SIGN_P256_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumEcSignP384Sha384                     GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "EC_SIGN_P384_SHA384"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumEcSignSecp256K1Sha256                GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "EC_SIGN_SECP256K1_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumHmacSha256                           GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "HMAC_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumHmacSha1                             GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "HMAC_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumHmacSha384                           GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "HMAC_SHA384"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumHmacSha512                           GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "HMAC_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumHmacSha224                           GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "HMAC_SHA224"
	GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnumExternalSymmetricEncryption          GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum = "EXTERNAL_SYMMETRIC_ENCRYPTION"
)

type GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnum string

const (
	GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnumProtectionLevelUnspecified GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnumSoftware                   GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnum = "SOFTWARE"
	GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnumHsm                        GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnum = "HSM"
	GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnumExternal                   GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnum = "EXTERNAL"
	GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnumExternalVpc                GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnum = "EXTERNAL_VPC"
)

type GoogleCloudKmsV1CryptoKeyVersionStateEnum string

const (
	GoogleCloudKmsV1CryptoKeyVersionStateEnumCryptoKeyVersionStateUnspecified GoogleCloudKmsV1CryptoKeyVersionStateEnum = "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED"
	GoogleCloudKmsV1CryptoKeyVersionStateEnumPendingGeneration                GoogleCloudKmsV1CryptoKeyVersionStateEnum = "PENDING_GENERATION"
	GoogleCloudKmsV1CryptoKeyVersionStateEnumEnabled                          GoogleCloudKmsV1CryptoKeyVersionStateEnum = "ENABLED"
	GoogleCloudKmsV1CryptoKeyVersionStateEnumDisabled                         GoogleCloudKmsV1CryptoKeyVersionStateEnum = "DISABLED"
	GoogleCloudKmsV1CryptoKeyVersionStateEnumDestroyed                        GoogleCloudKmsV1CryptoKeyVersionStateEnum = "DESTROYED"
	GoogleCloudKmsV1CryptoKeyVersionStateEnumDestroyScheduled                 GoogleCloudKmsV1CryptoKeyVersionStateEnum = "DESTROY_SCHEDULED"
	GoogleCloudKmsV1CryptoKeyVersionStateEnumPendingImport                    GoogleCloudKmsV1CryptoKeyVersionStateEnum = "PENDING_IMPORT"
	GoogleCloudKmsV1CryptoKeyVersionStateEnumImportFailed                     GoogleCloudKmsV1CryptoKeyVersionStateEnum = "IMPORT_FAILED"
)

// GoogleCloudKmsV1CryptoKeyVersion
// A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
type GoogleCloudKmsV1CryptoKeyVersion struct {
	Algorithm                      *GoogleCloudKmsV1CryptoKeyVersionAlgorithmEnum       `json:"algorithm,omitempty"`
	Attestation                    *GoogleCloudKmsV1KeyOperationAttestation             `json:"attestation,omitempty"`
	CreateTime                     *string                                              `json:"createTime,omitempty"`
	DestroyEventTime               *string                                              `json:"destroyEventTime,omitempty"`
	DestroyTime                    *string                                              `json:"destroyTime,omitempty"`
	ExternalProtectionLevelOptions *GoogleCloudKmsV1ExternalProtectionLevelOptions      `json:"externalProtectionLevelOptions,omitempty"`
	GenerateTime                   *string                                              `json:"generateTime,omitempty"`
	ImportFailureReason            *string                                              `json:"importFailureReason,omitempty"`
	ImportJob                      *string                                              `json:"importJob,omitempty"`
	ImportTime                     *string                                              `json:"importTime,omitempty"`
	Name                           *string                                              `json:"name,omitempty"`
	ProtectionLevel                *GoogleCloudKmsV1CryptoKeyVersionProtectionLevelEnum `json:"protectionLevel,omitempty"`
	ReimportEligible               *bool                                                `json:"reimportEligible,omitempty"`
	State                          *GoogleCloudKmsV1CryptoKeyVersionStateEnum           `json:"state,omitempty"`
}
