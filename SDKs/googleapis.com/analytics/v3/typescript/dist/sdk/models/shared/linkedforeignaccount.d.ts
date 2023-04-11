import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for an Analytics Remarketing Audience Foreign Link.
 */
export declare class LinkedForeignAccountInput extends SpeakeasyBase {
    /**
     * Account ID to which this linked foreign account belongs.
     */
    accountId?: string;
    /**
     * Entity ad account link ID.
     */
    id?: string;
    /**
     * Resource type for linked foreign account.
     */
    kind?: string;
    /**
     * The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX.
     */
    linkedAccountId?: string;
    /**
     * Remarketing audience ID to which this linked foreign account belongs.
     */
    remarketingAudienceId?: string;
    /**
     * The status of this foreign account link.
     */
    status?: string;
    /**
     * The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.
     */
    type?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.
     */
    webPropertyId?: string;
}
/**
 * JSON template for an Analytics Remarketing Audience Foreign Link.
 */
export declare class LinkedForeignAccount extends SpeakeasyBase {
    /**
     * Account ID to which this linked foreign account belongs.
     */
    accountId?: string;
    /**
     * Boolean indicating whether this is eligible for search.
     */
    eligibleForSearch?: boolean;
    /**
     * Entity ad account link ID.
     */
    id?: string;
    /**
     * Internal ID for the web property to which this linked foreign account belongs.
     */
    internalWebPropertyId?: string;
    /**
     * Resource type for linked foreign account.
     */
    kind?: string;
    /**
     * The foreign account ID. For example the an Google Ads `linkedAccountId` has the following format XXX-XXX-XXXX.
     */
    linkedAccountId?: string;
    /**
     * Remarketing audience ID to which this linked foreign account belongs.
     */
    remarketingAudienceId?: string;
    /**
     * The status of this foreign account link.
     */
    status?: string;
    /**
     * The type of the foreign account. For example, `ADWORDS_LINKS`, `DBM_LINKS`, `MCC_LINKS` or `OPTIMIZE`.
     */
    type?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs.
     */
    webPropertyId?: string;
}
