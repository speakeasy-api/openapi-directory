import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessQuotaStatus } from "./googleanalyticsadminv1alphaaccessquotastatus";
/**
 * Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
 */
export declare class GoogleAnalyticsAdminV1alphaAccessQuota extends SpeakeasyBase {
    /**
     * Current state for a particular quota group.
     */
    concurrentRequests?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerDay?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerProjectPerHour?: GoogleAnalyticsAdminV1alphaAccessQuotaStatus;
}
