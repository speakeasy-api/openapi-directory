import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date
 */
export declare enum CertificateRenewRootTypeEnum {
    GodaddySha1 = "GODADDY_SHA_1",
    GodaddySha2 = "GODADDY_SHA_2",
    StarfieldSha1 = "STARFIELD_SHA_1",
    StarfieldSha2 = "STARFIELD_SHA_2"
}
/**
 * The renew request info
 */
export declare class CertificateRenew extends SpeakeasyBase {
    /**
     * Required if client would like to receive stateful actions via callback during certificate lifecyle
     */
    callbackUrl?: string;
    /**
     * The common name of certificate to be secured
     */
    commonName?: string;
    /**
     * Certificate Signing Request.
     */
    csr?: string;
    /**
     * Number of years for certificate validity period, if different from previous certificate
     */
    period?: number;
    /**
     * Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date
     */
    rootType?: CertificateRenewRootTypeEnum;
    /**
     * Only used for UCC products. An array of subject alternative names to include in certificate. Not including a subject alternative name that was in the previous certificate will remove it from the renewed certificate.
     */
    subjectAlternativeNames?: string[];
}
