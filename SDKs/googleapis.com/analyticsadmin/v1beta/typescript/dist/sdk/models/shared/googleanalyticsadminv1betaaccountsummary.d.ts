import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaPropertySummary } from "./googleanalyticsadminv1betapropertysummary";
/**
 * A virtual resource representing an overview of an account and all its child GA4 properties.
**/
export declare class GoogleAnalyticsAdminV1betaAccountSummary extends SpeakeasyBase {
    account?: string;
    displayName?: string;
    name?: string;
    propertySummaries?: GoogleAnalyticsAdminV1betaPropertySummary[];
}
