import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of access token
 */
export declare enum AccessTokenDetailsRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}
/**
 * Access token details that are currently associated with this user
 */
export declare class AccessTokenDetails extends SpeakeasyBase {
    /**
     * Client ID that is associated with the user
     */
    clientId?: string;
    /**
     * Contributor ID that is associated with the user
     */
    contributorId?: string;
    /**
     * Customer ID that is associated with the user
     */
    customerId?: string;
    /**
     * Number of seconds until the access token expires; no expiration if this value is null
     */
    expiresIn?: number;
    /**
     * Organization ID that is associated with the user
     */
    organizationId?: string;
    /**
     * Type of access token
     */
    realm?: AccessTokenDetailsRealmEnum;
    /**
     * Scopes that this access token provides when used as authentication
     */
    scopes?: string[];
    /**
     * User ID that is associated with the user
     */
    userId?: string;
    /**
     * User name that is associated with the user
     */
    username?: string;
}
