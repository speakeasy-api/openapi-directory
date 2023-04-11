import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod } from "./googlecloudpaymentsresellersubscriptionv1serviceperiod";
/**
 * Details for a ONE_TIME recurrence line item.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails extends SpeakeasyBase {
    /**
     * A description of what time period or moment in time the product or service is being delivered over.
     */
    servicePeriod?: GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod;
}
