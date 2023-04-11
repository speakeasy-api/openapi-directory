import { SpeakeasyBase } from "../../../internal/utils";
import { SslCert } from "./sslcert";
/**
 * SslCertDetail.
 */
export declare class SslCertDetail extends SpeakeasyBase {
    /**
     * SslCerts Resource
     */
    certInfo?: SslCert;
    /**
     * The private key for the client cert, in pem format. Keep private in order to protect your security.
     */
    certPrivateKey?: string;
}
