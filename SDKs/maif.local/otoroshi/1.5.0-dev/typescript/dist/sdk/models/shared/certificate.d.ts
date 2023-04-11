import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A SSL/TLS X509 certificate
 */
export declare class Certificate extends SpeakeasyBase {
    /**
     * Allow Otoroshi to renew the certificate (if self signed)
     */
    autoRenew: string;
    /**
     * Certificate is a CA (read only)
     */
    ca: string;
    /**
     * Reference for a CA certificate in otoroshi
     */
    caRef: string;
    /**
     * Certificate chain of trust in PEM format
     */
    chain: string;
    /**
     * Domain of the certificate (read only)
     */
    domain: string;
    /**
     * Start date of validity
     */
    from: string;
    /**
     * Id of the certificate
     */
    id: string;
    /**
     * PKCS8 private key in PEM format
     */
    privateKey: string;
    /**
     * Certificate is self signed  read only)
     */
    selfSigned: string;
    /**
     * Subject of the certificate (read only)
     */
    subject: string;
    /**
     * End date of validity
     */
    to: string;
    /**
     * Certificate is valid (read only)
     */
    valid: string;
}
