import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an HTTP certificate challenge.
 */
export declare class CertHttpChallenge extends SpeakeasyBase {
    /**
     * The URL path on which to serve the specified token to satisfy the certificate challenge.
     */
    path?: string;
    /**
     * The token to serve at the specified URL path to satisfy the certificate challenge.
     */
    token?: string;
}
