import { SpeakeasyBase } from "../../../internal/utils";
import { KeyOperationAttestation, KeyOperationAttestationInput } from "./keyoperationattestation";
import { WrappingPublicKey } from "./wrappingpublickey";
/**
 * Required. Immutable. The wrapping method to be used for incoming key material.
 */
export declare enum ImportJobImportMethodEnum {
    ImportMethodUnspecified = "IMPORT_METHOD_UNSPECIFIED",
    RsaOaep3072Sha1Aes256 = "RSA_OAEP_3072_SHA1_AES_256",
    RsaOaep4096Sha1Aes256 = "RSA_OAEP_4096_SHA1_AES_256",
    RsaOaep3072Sha256Aes256 = "RSA_OAEP_3072_SHA256_AES_256",
    RsaOaep4096Sha256Aes256 = "RSA_OAEP_4096_SHA256_AES_256",
    RsaOaep3072Sha256 = "RSA_OAEP_3072_SHA256",
    RsaOaep4096Sha256 = "RSA_OAEP_4096_SHA256"
}
/**
 * Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.
 */
export declare enum ImportJobProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Output only. The current state of the ImportJob, indicating if it can be used.
 */
export declare enum ImportJobStateEnum {
    ImportJobStateUnspecified = "IMPORT_JOB_STATE_UNSPECIFIED",
    PendingGeneration = "PENDING_GENERATION",
    Active = "ACTIVE",
    Expired = "EXPIRED"
}
/**
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
 */
export declare class ImportJob extends SpeakeasyBase {
    /**
     * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
     */
    attestation?: KeyOperationAttestation;
    /**
     * Output only. The time at which this ImportJob was created.
     */
    createTime?: string;
    /**
     * Output only. The time this ImportJob expired. Only present if state is EXPIRED.
     */
    expireEventTime?: string;
    /**
     * Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.
     */
    expireTime?: string;
    /**
     * Output only. The time this ImportJob's key material was generated.
     */
    generateTime?: string;
    /**
     * Required. Immutable. The wrapping method to be used for incoming key material.
     */
    importMethod?: ImportJobImportMethodEnum;
    /**
     * Output only. The resource name for this ImportJob in the format `projects/* /locations/* /keyRings/* /importJobs/*`.
     */
    name?: string;
    /**
     * Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.
     */
    protectionLevel?: ImportJobProtectionLevelEnum;
    /**
     * The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
     */
    publicKey?: WrappingPublicKey;
    /**
     * Output only. The current state of the ImportJob, indicating if it can be used.
     */
    state?: ImportJobStateEnum;
}
/**
 * An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob's public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).
 */
export declare class ImportJobInput extends SpeakeasyBase {
    /**
     * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
     */
    attestation?: KeyOperationAttestationInput;
    /**
     * Required. Immutable. The wrapping method to be used for incoming key material.
     */
    importMethod?: ImportJobImportMethodEnum;
    /**
     * Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.
     */
    protectionLevel?: ImportJobProtectionLevelEnum;
    /**
     * The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.
     */
    publicKey?: WrappingPublicKey;
}
