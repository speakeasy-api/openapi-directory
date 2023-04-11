import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents } from "./googlefirebasefcmdatav1beta1deliveryperformancepercents";
import { GoogleFirebaseFcmDataV1beta1MessageInsightPercents } from "./googlefirebasefcmdatav1beta1messageinsightpercents";
import { GoogleFirebaseFcmDataV1beta1MessageOutcomePercents } from "./googlefirebasefcmdatav1beta1messageoutcomepercents";
/**
 * Data detailing messaging delivery
 */
export declare class GoogleFirebaseFcmDataV1beta1Data extends SpeakeasyBase {
    /**
     * Count of messages accepted by FCM intended to Android devices. The targeted device must have opted in to the collection of usage and diagnostic information.
     */
    countMessagesAccepted?: string;
    /**
     * Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
     */
    deliveryPerformancePercents?: GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents;
    /**
     * Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.
     */
    messageInsightPercents?: GoogleFirebaseFcmDataV1beta1MessageInsightPercents;
    /**
     * Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
     */
    messageOutcomePercents?: GoogleFirebaseFcmDataV1beta1MessageOutcomePercents;
}
