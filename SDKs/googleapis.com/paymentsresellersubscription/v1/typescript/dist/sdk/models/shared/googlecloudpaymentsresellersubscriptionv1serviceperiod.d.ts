import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A description of what time period or moment in time the product or service is being delivered over.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod extends SpeakeasyBase {
    /**
     * Optional. The end time of the service period. Time is exclusive.
     */
    endTime?: string;
    /**
     * Required. The start time of the service period. Time is inclusive.
     */
    startTime?: string;
}
