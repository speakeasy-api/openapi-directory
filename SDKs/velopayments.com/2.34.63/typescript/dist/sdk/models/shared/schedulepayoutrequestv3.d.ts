import { SpeakeasyBase } from "../../../internal/utils";
/**
 * schedule payout parameters
 */
export declare class SchedulePayoutRequestV3 extends SpeakeasyBase {
    /**
     * Flag to indicate whether to receive notifications when scheduled payout is processed
     */
    notificationsEnabled: boolean;
    /**
     * UTC timestamp for instructing the payout. Format is ISO-8601.
     */
    scheduledFor: Date;
}
