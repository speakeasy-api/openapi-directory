import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Anonymization of a source.
 */
export declare class APIKeyOut extends SpeakeasyBase {
    /**
     * The API Key has admin role.
     */
    admin?: boolean;
    /**
     * The API Key is anonymized (using SHA-252 digest for logging). Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed).
     */
    anonymized?: boolean;
    /**
     * The user API Key.
     */
    apiKey?: string;
    /**
     * The API Key has role corporate (ex SWIFT payments instead of Stripe payments).
     */
    corporate?: boolean;
    /**
     * The API Key is temporarily or permanently disabled.
     */
    disabled?: boolean;
    /**
     * The API Key is learnable (without assuming truthfulness) for machine learning. Set learnable=false and anonymized=true for highest privacy (ie. to forget data as it's processed).
     */
    learnable?: boolean;
    /**
     * The API Key has partner role.
     */
    partner?: boolean;
    /**
     * The API Key is associated to a valid Stripe account.
     */
    striped?: boolean;
    /**
     * The user identifier.
     */
    userId?: string;
    /**
     * The API Key is vetted (assumed truthful) for machine learning.
     */
    vetted?: boolean;
}
