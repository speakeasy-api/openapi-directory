import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.
 */
export declare class GoogleFirebaseFcmDataV1beta1MessageInsightPercents extends SpeakeasyBase {
    /**
     * The percentage of accepted messages that had their priority lowered from high to normal. See [documentation for setting message priority](https://firebase.google.com/docs/cloud-messaging/android/message-priority).
     */
    priorityLowered?: number;
}
