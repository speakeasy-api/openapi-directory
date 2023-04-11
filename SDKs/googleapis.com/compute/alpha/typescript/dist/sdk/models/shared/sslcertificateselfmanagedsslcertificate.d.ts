import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration and status of a self-managed SSL certificate.
 */
export declare class SslCertificateSelfManagedSslCertificate extends SpeakeasyBase {
    /**
     * A local certificate file. The certificate must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at least one intermediate cert.
     */
    certificate?: string;
    /**
     * A write-only private key in PEM format. Only insert requests will include this field.
     */
    privateKey?: string;
}
