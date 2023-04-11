import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductSigningCertificate extends SpeakeasyBase {
    /**
     * The base64 urlsafe encoded SHA1 hash of the certificate. (This field is deprecated in favor of SHA2-256. It should not be used and may be removed at any time.)
     */
    certificateHashSha1?: string;
    /**
     * The base64 urlsafe encoded SHA2-256 hash of the certificate.
     */
    certificateHashSha256?: string;
}
