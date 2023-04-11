import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaPropertySummary } from "./googleanalyticsadminv1betapropertysummary";
/**
 * A virtual resource representing an overview of an account and all its child GA4 properties.
 */
export declare class GoogleAnalyticsAdminV1betaAccountSummary extends SpeakeasyBase {
    /**
     * Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000"
     */
    account?: string;
    /**
     * Display name for the account referred to in this account summary.
     */
    displayName?: string;
    /**
     * Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000"
     */
    name?: string;
    /**
     * List of summaries for child accounts of this account.
     */
    propertySummaries?: GoogleAnalyticsAdminV1betaPropertySummary[];
}
