import { SpeakeasyBase } from "../../../internal/utils";
/**
 * URLs where a CertificateAuthority will publish content.
 */
export declare class AccessUrls extends SpeakeasyBase {
    /**
     * The URL where this CertificateAuthority's CA certificate is published. This will only be set for CAs that have been activated.
     */
    caCertificateAccessUrl?: string;
    /**
     * The URLs where this CertificateAuthority's CRLs are published. This will only be set for CAs that have been activated.
     */
    crlAccessUrls?: string[];
}
