import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
 */
export declare class Certificate extends SpeakeasyBase {
    /**
     * Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true.
     */
    issuer?: string;
    /**
     * Output only. The certificate is not valid after this time. Only present if parsed is true.
     */
    notAfterTime?: string;
    /**
     * Output only. The certificate is not valid before this time. Only present if parsed is true.
     */
    notBeforeTime?: string;
    /**
     * Output only. True if the certificate was parsed successfully.
     */
    parsed?: boolean;
    /**
     * Required. The raw certificate bytes in DER format.
     */
    rawDer?: string;
    /**
     * Output only. The certificate serial number as a hex string. Only present if parsed is true.
     */
    serialNumber?: string;
    /**
     * Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true.
     */
    sha256Fingerprint?: string;
    /**
     * Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true.
     */
    subject?: string;
    /**
     * Output only. The subject Alternative DNS names. Only present if parsed is true.
     */
    subjectAlternativeDnsNames?: string[];
}
/**
 * A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.
 */
export declare class CertificateInput extends SpeakeasyBase {
    /**
     * Required. The raw certificate bytes in DER format.
     */
    rawDer?: string;
}
