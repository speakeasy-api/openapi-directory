package shared

type GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum string

const (
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumCryptoKeyVersionAlgorithmUnspecified GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumGoogleSymmetricEncryption            GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "GOOGLE_SYMMETRIC_ENCRYPTION"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss2048Sha256                 GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_2048_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss3072Sha256                 GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_3072_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss4096Sha256                 GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPss4096Sha512                 GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PSS_4096_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs12048Sha256               GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_2048_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs13072Sha256               GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_3072_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs14096Sha256               GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignPkcs14096Sha512               GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_PKCS1_4096_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignRawPkcs12048                  GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_2048"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignRawPkcs13072                  GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_3072"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaSignRawPkcs14096                  GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_SIGN_RAW_PKCS1_4096"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep2048Sha256             GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep3072Sha256             GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep4096Sha256             GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep4096Sha512             GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep2048Sha1               GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_2048_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep3072Sha1               GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_3072_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumRsaDecryptOaep4096Sha1               GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "RSA_DECRYPT_OAEP_4096_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumEcSignP256Sha256                     GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "EC_SIGN_P256_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumEcSignP384Sha384                     GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "EC_SIGN_P384_SHA384"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumEcSignSecp256K1Sha256                GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "EC_SIGN_SECP256K1_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumHmacSha256                           GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "HMAC_SHA256"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumHmacSha1                             GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "HMAC_SHA1"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumHmacSha384                           GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "HMAC_SHA384"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumHmacSha512                           GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "HMAC_SHA512"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumHmacSha224                           GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "HMAC_SHA224"
	GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnumExternalSymmetricEncryption          GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum = "EXTERNAL_SYMMETRIC_ENCRYPTION"
)

type GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnum string

const (
	GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnumProtectionLevelUnspecified GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnum = "PROTECTION_LEVEL_UNSPECIFIED"
	GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnumSoftware                   GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnum = "SOFTWARE"
	GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnumHsm                        GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnum = "HSM"
	GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnumExternal                   GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnum = "EXTERNAL"
	GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnumExternalVpc                GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnum = "EXTERNAL_VPC"
)

// GoogleCloudKmsV1CryptoKeyVersionTemplate
// A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
type GoogleCloudKmsV1CryptoKeyVersionTemplate struct {
	Algorithm       *GoogleCloudKmsV1CryptoKeyVersionTemplateAlgorithmEnum       `json:"algorithm,omitempty"`
	ProtectionLevel *GoogleCloudKmsV1CryptoKeyVersionTemplateProtectionLevelEnum `json:"protectionLevel,omitempty"`
}
