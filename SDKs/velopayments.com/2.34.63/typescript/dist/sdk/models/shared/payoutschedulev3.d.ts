import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details relating to a payout that was executed via a schedule or is still waiting to be executed
 */
export declare class PayoutScheduleV3 extends SpeakeasyBase {
    notificationsEnabled: boolean;
    /**
     * The current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED
     */
    scheduleStatus: string;
    scheduledAt: Date;
    /**
     * ID of the user or application that scheduled the payout
     */
    scheduledByPrincipalId: string;
    scheduledFor: Date;
}
