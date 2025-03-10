import { SpeakeasyBase } from "../../../internal/utils";
import { CryptoKeyVersion, CryptoKeyVersionInput } from "./cryptokeyversion";
import { CryptoKeyVersionTemplate } from "./cryptokeyversiontemplate";
/**
 * Immutable. The immutable purpose of this CryptoKey.
 */
export declare enum CryptoKeyPurposeEnum {
    CryptoKeyPurposeUnspecified = "CRYPTO_KEY_PURPOSE_UNSPECIFIED",
    EncryptDecrypt = "ENCRYPT_DECRYPT",
    AsymmetricSign = "ASYMMETRIC_SIGN",
    AsymmetricDecrypt = "ASYMMETRIC_DECRYPT",
    Mac = "MAC"
}
/**
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
 */
export declare class CryptoKey extends SpeakeasyBase {
    /**
     * Output only. The time at which this CryptoKey was created.
     */
    createTime?: string;
    /**
     * Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/* /locations/* /ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
     */
    cryptoKeyBackend?: string;
    /**
     * Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours.
     */
    destroyScheduledDuration?: string;
    /**
     * Immutable. Whether this key may contain imported versions only.
     */
    importOnly?: boolean;
    /**
     * Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource name for this CryptoKey in the format `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
     */
    name?: string;
    /**
     * At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    nextRotationTime?: string;
    /**
     * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
     */
    primary?: CryptoKeyVersion;
    /**
     * Immutable. The immutable purpose of this CryptoKey.
     */
    purpose?: CryptoKeyPurposeEnum;
    /**
     * next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    rotationPeriod?: string;
    /**
     * A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
     */
    versionTemplate?: CryptoKeyVersionTemplate;
}
/**
 * A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.
 */
export declare class CryptoKeyInput extends SpeakeasyBase {
    /**
     * Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/* /locations/* /ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.
     */
    cryptoKeyBackend?: string;
    /**
     * Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours.
     */
    destroyScheduledDuration?: string;
    /**
     * Immutable. Whether this key may contain imported versions only.
     */
    importOnly?: boolean;
    /**
     * Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).
     */
    labels?: Record<string, string>;
    /**
     * At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    nextRotationTime?: string;
    /**
     * A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.
     */
    primary?: CryptoKeyVersionInput;
    /**
     * Immutable. The immutable purpose of this CryptoKey.
     */
    purpose?: CryptoKeyPurposeEnum;
    /**
     * next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.
     */
    rotationPeriod?: string;
    /**
     * A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.
     */
    versionTemplate?: CryptoKeyVersionTemplate;
}
