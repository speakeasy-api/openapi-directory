import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateAuthorityConfig } from "./certificateauthorityconfig";
/**
 * Required. The key algorithm to use when generating the private key.
 */
export declare enum CertificateIssuanceConfigKeyAlgorithmEnum {
    KeyAlgorithmUnspecified = "KEY_ALGORITHM_UNSPECIFIED",
    Rsa2048 = "RSA_2048",
    EcdsaP256 = "ECDSA_P256"
}
/**
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
 */
export declare class CertificateIssuanceConfig extends SpeakeasyBase {
    /**
     * The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
     */
    certificateAuthorityConfig?: CertificateAuthorityConfig;
    /**
     * Output only. The creation timestamp of a CertificateIssuanceConfig.
     */
    createTime?: string;
    /**
     * One or more paragraphs of text description of a CertificateIssuanceConfig.
     */
    description?: string;
    /**
     * Required. The key algorithm to use when generating the private key.
     */
    keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithmEnum;
    /**
     * Set of labels associated with a CertificateIssuanceConfig.
     */
    labels?: Record<string, string>;
    /**
     * Required. Workload certificate lifetime requested.
     */
    lifetime?: string;
    /**
     * A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/* /locations/* /certificateIssuanceConfigs/*`.
     */
    name?: string;
    /**
     * Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.
     */
    rotationWindowPercentage?: number;
    /**
     * Output only. The last update timestamp of a CertificateIssuanceConfig.
     */
    updateTime?: string;
}
/**
 * CertificateIssuanceConfig specifies how to issue and manage a certificate.
 */
export declare class CertificateIssuanceConfigInput extends SpeakeasyBase {
    /**
     * The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.
     */
    certificateAuthorityConfig?: CertificateAuthorityConfig;
    /**
     * One or more paragraphs of text description of a CertificateIssuanceConfig.
     */
    description?: string;
    /**
     * Required. The key algorithm to use when generating the private key.
     */
    keyAlgorithm?: CertificateIssuanceConfigKeyAlgorithmEnum;
    /**
     * Set of labels associated with a CertificateIssuanceConfig.
     */
    labels?: Record<string, string>;
    /**
     * Required. Workload certificate lifetime requested.
     */
    lifetime?: string;
    /**
     * A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/* /locations/* /certificateIssuanceConfigs/*`.
     */
    name?: string;
    /**
     * Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.
     */
    rotationWindowPercentage?: number;
}
