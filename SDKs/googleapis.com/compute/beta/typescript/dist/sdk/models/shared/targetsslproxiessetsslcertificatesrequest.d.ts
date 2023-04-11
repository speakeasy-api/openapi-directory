import { SpeakeasyBase } from "../../../internal/utils";
export declare class TargetSslProxiesSetSslCertificatesRequest extends SpeakeasyBase {
    /**
     * New set of URLs to SslCertificate resources to associate with this TargetSslProxy. At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
     */
    sslCertificates?: string[];
}
