import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of an X.509 certificate. For informational purposes only.
 */
export declare class X509CertificateDetails extends SpeakeasyBase {
    /**
     * The time the certificate becomes invalid.
     */
    expiryTime?: string;
    /**
     * The entity that signed the certificate.
     */
    issuer?: string;
    /**
     * The type of public key in the certificate.
     */
    publicKeyType?: string;
    /**
     * The algorithm used to sign the certificate.
     */
    signatureAlgorithm?: string;
    /**
     * The time the certificate becomes valid.
     */
    startTime?: string;
    /**
     * The entity the certificate and public key belong to.
     */
    subject?: string;
}
