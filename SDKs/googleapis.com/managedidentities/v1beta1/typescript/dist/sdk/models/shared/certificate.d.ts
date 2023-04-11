import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Certificate used to configure LDAPS.
 */
export declare class Certificate extends SpeakeasyBase {
    /**
     * The certificate expire time.
     */
    expireTime?: string;
    /**
     * Certificate used to configure LDAPS.
     */
    issuingCertificate?: Certificate;
    /**
     * The certificate subject.
     */
    subject?: string;
    /**
     * The additional hostnames for the domain.
     */
    subjectAlternativeName?: string[];
    /**
     * The certificate thumbprint which uniquely identifies the certificate.
     */
    thumbprint?: string;
}
