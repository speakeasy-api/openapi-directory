import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Acme key identifier and HMAC key for the external account binding. Directory URI is also provided for making ACME requests.
 */
export declare class ExternalAccountBinding extends SpeakeasyBase {
    /**
     * ACME directory resource URL.
     */
    directoryUrl: string;
    /**
     * EAB HMAC key for the ACME account
     */
    hmacKey: string;
    /**
     * EAB key identifier for the ACME account.
     */
    keyId: string;
}
