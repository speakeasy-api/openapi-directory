import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TlsCertificate Resource
 */
export declare class TlsCertificate extends SpeakeasyBase {
    /**
     * PEM representation.
     */
    cert?: string;
    /**
     * Output only. The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.
     */
    createTime?: string;
    /**
     * Output only. The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2020-05-18T00:00:00.094Z`.
     */
    expireTime?: string;
    /**
     * Serial number, as extracted from the certificate.
     */
    serialNumber?: string;
    /**
     * Sha1 Fingerprint of the certificate.
     */
    sha1Fingerprint?: string;
}
