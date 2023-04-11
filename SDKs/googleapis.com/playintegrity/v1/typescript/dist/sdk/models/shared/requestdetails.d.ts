import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the integrity request information.
 */
export declare class RequestDetails extends SpeakeasyBase {
    /**
     * Nonce that was provided in the request (which is base64 web-safe no-wrap).
     */
    nonce?: string;
    /**
     * Request hash that was provided in the request.
     */
    requestHash?: string;
    /**
     * Required. Application package name this attestation was requested for. Note: This field makes no guarantees or promises on the caller integrity. For details on application integrity, check application_integrity.
     */
    requestPackageName?: string;
    /**
     * Required. Timestamp, in milliseconds, of the integrity application request.
     */
    timestampMillis?: string;
}
