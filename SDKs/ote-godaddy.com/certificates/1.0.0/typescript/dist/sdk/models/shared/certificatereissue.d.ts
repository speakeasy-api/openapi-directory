import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date
 */
export declare enum CertificateReissueRootTypeEnum {
    GodaddySha1 = "GODADDY_SHA_1",
    GodaddySha2 = "GODADDY_SHA_2",
    StarfieldSha1 = "STARFIELD_SHA_1",
    StarfieldSha2 = "STARFIELD_SHA_2"
}
/**
 * The reissue request info
 */
export declare class CertificateReissue extends SpeakeasyBase {
    /**
     * Required if client would like to receive stateful action via callback during certificate lifecyle
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
     * In hours, time to delay revoking existing certificate after issuance of new certificate. If revokeExistingCertOnIssuance is enabled, this value will be ignored
     */
    delayExistingRevoke?: number;
    /**
     * Optional field. Domain verification will be required for each domain listed here. Specify a value of * to indicate that all domains associated with the request should have their domain information reverified.
     */
    forceDomainRevetting?: string[];
    /**
     * Root Type. Depending on certificate expiration date, SHA_1 not be allowed. Will default to SHA_2 if expiration date exceeds sha1 allowed date
     */
    rootType?: CertificateReissueRootTypeEnum;
    /**
     * Only used for UCC products. An array of subject alternative names to include in certificate.
     */
    subjectAlternativeNames?: string[];
}
