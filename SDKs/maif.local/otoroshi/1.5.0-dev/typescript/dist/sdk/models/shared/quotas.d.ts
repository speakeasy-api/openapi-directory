import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Quotas state for an api key on a service group
 */
export declare class Quotas extends SpeakeasyBase {
    /**
     * The number of authorized calls per day
     */
    authorizedCallsPerDay: number;
    /**
     * The number of authorized calls per month
     */
    authorizedCallsPerMonth: number;
    /**
     * The number of authorized calls per second
     */
    authorizedCallsPerSec: number;
    /**
     * The current number of calls per day
     */
    currentCallsPerDay: number;
    /**
     * The current number of calls per month
     */
    currentCallsPerMonth: number;
    /**
     * The current number of calls per second
     */
    currentCallsPerSec: number;
    /**
     * The remaining number of calls per day
     */
    remainingCallsPerDay: number;
    /**
     * The number of authorized calls per month
     */
    remainingCallsPerMonth: number;
    /**
     * The remaining number of calls per second
     */
    remainingCallsPerSec: number;
}
