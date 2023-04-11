import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateTemplate } from "./certificatetemplate";
/**
 * Validation state of this certificate.
 */
export declare enum CertificateAttributesValidationStateEnum {
    CertificateValidationStateUnspecified = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED",
    ValidationSuccessful = "VALIDATION_SUCCESSFUL",
    ValidationFailed = "VALIDATION_FAILED"
}
/**
 * Stores information about a certificate.
 */
export declare class CertificateAttributes extends SpeakeasyBase {
    /**
     * CertificateTemplate (v3 Extension in X.509).
     */
    certificateTemplate?: CertificateTemplate;
    /**
     * The encoded certificate fingerprint.
     */
    fingerprint?: string;
    /**
     * The name of the issuer of this certificate.
     */
    issuer?: string;
    /**
     * Serial number of the certificate, Example: "123456789".
     */
    serialNumber?: string;
    /**
     * The subject name of this certificate.
     */
    subject?: string;
    /**
     * The certificate thumbprint.
     */
    thumbprint?: string;
    /**
     * Validation state of this certificate.
     */
    validationState?: CertificateAttributesValidationStateEnum;
    /**
     * Certificate not valid at or after this timestamp.
     */
    validityExpirationTime?: string;
    /**
     * Certificate not valid before this timestamp.
     */
    validityStartTime?: string;
}
