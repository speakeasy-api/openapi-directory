import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An allotment of credits as part of a subscription
 */
export declare class Allotment extends SpeakeasyBase {
    /**
     * Number of credits remaining in the subscription
     */
    downloadsLeft?: number;
    /**
     * Total number of credits available to this subscription
     */
    downloadsLimit?: number;
    /**
     * Date the subscription ends
     */
    endTime?: Date;
    /**
     * Date the subscription started
     */
    startTime?: Date;
}
