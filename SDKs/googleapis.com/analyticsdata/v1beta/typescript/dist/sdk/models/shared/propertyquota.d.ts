import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaStatus } from "./quotastatus";
/**
 * Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
 */
export declare class PropertyQuota extends SpeakeasyBase {
    /**
     * Current state for a particular quota group.
     */
    concurrentRequests?: QuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    potentiallyThresholdedRequestsPerHour?: QuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    serverErrorsPerProjectPerHour?: QuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerDay?: QuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerHour?: QuotaStatus;
    /**
     * Current state for a particular quota group.
     */
    tokensPerProjectPerHour?: QuotaStatus;
}
