import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaAccessQuotaStatus } from "./googleanalyticsadminv1betaaccessquotastatus";
/**
 * Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
 */
export declare class GoogleAnalyticsAdminV1betaAccessQuota extends SpeakeasyBase {
    /**
     * Current state for a particular quota group.
     */
    concurrentRequests?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerDay?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerProjectPerHour?: GoogleAnalyticsAdminV1betaAccessQuotaStatus;
}
