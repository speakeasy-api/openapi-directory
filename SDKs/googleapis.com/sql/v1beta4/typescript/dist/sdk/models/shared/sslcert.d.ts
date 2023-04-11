import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SslCerts Resource
 */
export declare class SslCert extends SpeakeasyBase {
    /**
     * PEM representation.
     */
    cert?: string;
    /**
     * Serial number, as extracted from the certificate.
     */
    certSerialNumber?: string;
    /**
     * User supplied name. Constrained to [a-zA-Z.-_ ]+.
     */
    commonName?: string;
    /**
     * The time when the certificate was created in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    createTime?: string;
    /**
     * The time when the certificate expires in [RFC 3339](https://tools.ietf.org/html/rfc3339) format, for example `2012-11-15T16:19:00.094Z`.
     */
    expirationTime?: string;
    /**
     * Name of the database instance.
     */
    instance?: string;
    /**
     * This is always `sql#sslCert`.
     */
    kind?: string;
    /**
     * The URI of this resource.
     */
    selfLink?: string;
    /**
     * Sha1 Fingerprint.
     */
    sha1Fingerprint?: string;
}
