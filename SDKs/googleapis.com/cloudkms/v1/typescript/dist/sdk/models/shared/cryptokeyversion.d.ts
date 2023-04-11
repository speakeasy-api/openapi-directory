import { SpeakeasyBase } from "../../../internal/utils";
import { ExternalProtectionLevelOptions } from "./externalprotectionleveloptions";
import { KeyOperationAttestation, KeyOperationAttestationInput } from "./keyoperationattestation";
/**
 * Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
 */
export declare enum CryptoKeyVersionAlgorithmEnum {
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
 * Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
 */
export declare enum CryptoKeyVersionProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * The current state of the CryptoKeyVersion.
 */
export declare enum CryptoKeyVersionStateEnum {
    CryptoKeyVersionStateUnspecified = "CRYPTO_KEY_VERSION_STATE_UNSPECIFIED",
    PendingGeneration = "PENDING_GENERATION",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Destroyed = "DESTROYED",
    DestroyScheduled = "DESTROY_SCHEDULED",
    PendingImport = "PENDING_IMPORT",
    ImportFailed = "IMPORT_FAILED",
    GenerationFailed = "GENERATION_FAILED",
    PendingExternalDestruction = "PENDING_EXTERNAL_DESTRUCTION",
    ExternalDestructionFailed = "EXTERNAL_DESTRUCTION_FAILED"
}
/**
 * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
 */
export declare class CryptoKeyVersion extends SpeakeasyBase {
    /**
     * Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.
     */
    algorithm?: CryptoKeyVersionAlgorithmEnum;
    /**
     * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
     */
    attestation?: KeyOperationAttestation;
    /**
     * Output only. The time at which this CryptoKeyVersion was created.
     */
    createTime?: string;
    /**
     * Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED.
     */
    destroyEventTime?: string;
    /**
     * Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.
     */
    destroyTime?: string;
    /**
     * Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED.
     */
    externalDestructionFailureReason?: string;
    /**
     * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
     */
    externalProtectionLevelOptions?: ExternalProtectionLevelOptions;
    /**
     * Output only. The time this CryptoKeyVersion's key material was generated.
     */
    generateTime?: string;
    /**
     * Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED.
     */
    generationFailureReason?: string;
    /**
     * Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED.
     */
    importFailureReason?: string;
    /**
     * Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported.
     */
    importJob?: string;
    /**
     * Output only. The time at which this CryptoKeyVersion's key material was most recently imported.
     */
    importTime?: string;
    /**
     * Output only. The resource name for this CryptoKeyVersion in the format `projects/* /locations/* /keyRings/* /cryptoKeys/* /cryptoKeyVersions/*`.
     */
    name?: string;
    /**
     * Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.
     */
    protectionLevel?: CryptoKeyVersionProtectionLevelEnum;
    /**
     * Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version.
     */
    reimportEligible?: boolean;
    /**
     * The current state of the CryptoKeyVersion.
     */
    state?: CryptoKeyVersionStateEnum;
}
/**
 * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
 */
export declare class CryptoKeyVersionInput extends SpeakeasyBase {
    /**
     * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
     */
    attestation?: KeyOperationAttestationInput;
    /**
     * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
     */
    externalProtectionLevelOptions?: ExternalProtectionLevelOptions;
    /**
     * The current state of the CryptoKeyVersion.
     */
    state?: CryptoKeyVersionStateEnum;
}
