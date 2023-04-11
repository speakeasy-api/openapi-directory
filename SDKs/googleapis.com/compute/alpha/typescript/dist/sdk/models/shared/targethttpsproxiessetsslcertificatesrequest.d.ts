import { SpeakeasyBase } from "../../../internal/utils";
export declare class TargetHttpsProxiesSetSslCertificatesRequest extends SpeakeasyBase {
    /**
     * New set of SslCertificate resources to associate with this TargetHttpsProxy resource. At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
     */
    sslCertificates?: string[];
}
