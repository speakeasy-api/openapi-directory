import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indicates to Google how Google should use these OAuth tokens.
 */
export declare enum AccountCredentialsPurposeEnum {
    AccountCredentialsPurposeUnspecified = "ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED",
    ShopifyOrderManagement = "SHOPIFY_ORDER_MANAGEMENT",
    ShopifyIntegration = "SHOPIFY_INTEGRATION"
}
/**
 * Credentials allowing Google to call a partner's API on behalf of a merchant.
 */
export declare class AccountCredentials extends SpeakeasyBase {
    /**
     * An OAuth access token.
     */
    accessToken?: string;
    /**
     * The amount of time, in seconds, after which the access token is no longer valid.
     */
    expiresIn?: string;
    /**
     * Indicates to Google how Google should use these OAuth tokens.
     */
    purpose?: AccountCredentialsPurposeEnum;
}
