import { SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";
/**
 * SslCerts list response.
 */
export declare class SslCertsListResponse extends SpeakeasyBase {
    /**
     * List of client certificates for the instance.
     */
    items?: SslCert[];
    /**
     * This is always `sql#sslCertsList`.
     */
    kind?: string;
}
