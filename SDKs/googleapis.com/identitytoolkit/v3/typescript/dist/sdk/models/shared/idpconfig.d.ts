import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Template for a single idp configuration.
 */
export declare class IdpConfig extends SpeakeasyBase {
    /**
     * OAuth2 client ID.
     */
    clientId?: string;
    /**
     * Whether this IDP is enabled.
     */
    enabled?: boolean;
    /**
     * Percent of users who will be prompted/redirected federated login for this IDP.
     */
    experimentPercent?: number;
    /**
     * OAuth2 provider.
     */
    provider?: string;
    /**
     * OAuth2 client secret.
     */
    secret?: string;
    /**
     * Whitelisted client IDs for audience check.
     */
    whitelistedAudiences?: string[];
}
