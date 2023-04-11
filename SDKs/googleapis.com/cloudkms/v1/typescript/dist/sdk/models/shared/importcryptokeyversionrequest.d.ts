import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.
 */
export declare enum ImportCryptoKeyVersionRequestAlgorithmEnum {
    CryptoKeyVersionAlgorithmUnspecified = "CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED",
    GoogleSymmetricEncryption = "GOOGLE_SYMMETRIC_ENCRYPTION",
    RsaSignPss2048Sha256 = "RSA_SIGN_PSS_2048_SHA256",
    RsaSignPss3072Sha256 = "RSA_SIGN_PSS_3072_SHA256",
    RsaSignPss4096Sha256 = "RSA_SIGN_PSS_4096_SHA256",
    RsaSignPss4096Sha512 = "RSA_SIGN_PSS_4096_SHA512",
    RsaSignPkcs12048Sha256 = "RSA_SIGN_PKCS1_2048_SHA256",
    RsaSignPkcs13072Sha256 = "RSA_SIGN_PKCS1_3072_SHA256",
    RsaSignPkcs14096Sha256 = "RSA_SIGN_PKCS1_4096_SHA256",
    RsaSignPkcs14096Sha512 = "RSA_SIGN_PKCS1_4096_SHA512",
    RsaSignRawPkcs12048 = "RSA_SIGN_RAW_PKCS1_2048",
    RsaSignRawPkcs13072 = "RSA_SIGN_RAW_PKCS1_3072",
    RsaSignRawPkcs14096 = "RSA_SIGN_RAW_PKCS1_4096",
    RsaDecryptOaep2048Sha256 = "RSA_DECRYPT_OAEP_2048_SHA256",
    RsaDecryptOaep3072Sha256 = "RSA_DECRYPT_OAEP_3072_SHA256",
    RsaDecryptOaep4096Sha256 = "RSA_DECRYPT_OAEP_4096_SHA256",
    RsaDecryptOaep4096Sha512 = "RSA_DECRYPT_OAEP_4096_SHA512",
    RsaDecryptOaep2048Sha1 = "RSA_DECRYPT_OAEP_2048_SHA1",
    RsaDecryptOaep3072Sha1 = "RSA_DECRYPT_OAEP_3072_SHA1",
    RsaDecryptOaep4096Sha1 = "RSA_DECRYPT_OAEP_4096_SHA1",
    EcSignP256Sha256 = "EC_SIGN_P256_SHA256",
    EcSignP384Sha384 = "EC_SIGN_P384_SHA384",
    EcSignSecp256K1Sha256 = "EC_SIGN_SECP256K1_SHA256",
    HmacSha256 = "HMAC_SHA256",
    HmacSha1 = "HMAC_SHA1",
    HmacSha384 = "HMAC_SHA384",
    HmacSha512 = "HMAC_SHA512",
    HmacSha224 = "HMAC_SHA224",
    ExternalSymmetricEncryption = "EXTERNAL_SYMMETRIC_ENCRYPTION"
}
/**
 * Request message for KeyManagementService.ImportCryptoKeyVersion.
 */
export declare class ImportCryptoKeyVersionRequest extends SpeakeasyBase {
    /**
     * Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.
     */
    algorithm?: ImportCryptoKeyVersionRequestAlgorithmEnum;
    /**
     * Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.
     */
    cryptoKeyVersion?: string;
    /**
     * Required. The name of the ImportJob that was used to wrap this key material.
     */
    importJob?: string;
    /**
     * Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified.
     */
    rsaAesWrappedKey?: string;
    /**
     * Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label.
     */
    wrappedKey?: string;
}
