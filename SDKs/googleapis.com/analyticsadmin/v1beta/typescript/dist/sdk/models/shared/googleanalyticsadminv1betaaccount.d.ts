import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource message representing a Google Analytics account.
 */
export declare class GoogleAnalyticsAdminV1betaAccount extends SpeakeasyBase {
    /**
     * Output only. Time when this account was originally created.
     */
    createTime?: string;
    /**
     * Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.
     */
    deleted?: boolean;
    /**
     * Required. Human-readable display name for this account.
     */
    displayName?: string;
    /**
     * Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
     */
    name?: string;
    /**
     * Country of business. Must be a Unicode CLDR region code.
     */
    regionCode?: string;
    /**
     * Output only. Time when account payload fields were last updated.
     */
    updateTime?: string;
}
/**
 * A resource message representing a Google Analytics account.
 */
export declare class GoogleAnalyticsAdminV1betaAccountInput extends SpeakeasyBase {
    /**
     * Required. Human-readable display name for this account.
     */
    displayName?: string;
    /**
     * Country of business. Must be a Unicode CLDR region code.
     */
    regionCode?: string;
}
