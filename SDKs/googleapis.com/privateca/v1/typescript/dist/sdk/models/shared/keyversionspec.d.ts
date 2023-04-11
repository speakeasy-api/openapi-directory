import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`.
 */
export declare enum KeyVersionSpecAlgorithmEnum {
    SignHashAlgorithmUnspecified = "SIGN_HASH_ALGORITHM_UNSPECIFIED",
    RsaPss2048Sha256 = "RSA_PSS_2048_SHA256",
    RsaPss3072Sha256 = "RSA_PSS_3072_SHA256",
    RsaPss4096Sha256 = "RSA_PSS_4096_SHA256",
    RsaPkcs12048Sha256 = "RSA_PKCS1_2048_SHA256",
    RsaPkcs13072Sha256 = "RSA_PKCS1_3072_SHA256",
    RsaPkcs14096Sha256 = "RSA_PKCS1_4096_SHA256",
    EcP256Sha256 = "EC_P256_SHA256",
    EcP384Sha384 = "EC_P384_SHA384"
}
/**
 * A Cloud KMS key configuration that a CertificateAuthority will use.
 */
export declare class KeyVersionSpec extends SpeakeasyBase {
    /**
     * The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. All managed keys will be have their ProtectionLevel as `HSM`.
     */
    algorithm?: KeyVersionSpecAlgorithmEnum;
    /**
     * The resource name for an existing Cloud KMS CryptoKeyVersion in the format `projects/* /locations/* /keyRings/* /cryptoKeys/* /cryptoKeyVersions/*`. This option enables full flexibility in the key's capabilities and properties.
     */
    cloudKmsKeyVersion?: string;
}
