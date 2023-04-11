import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details relating to a payout that was executed via a schedule or is still waiting to be executed
 */
export declare class PayoutSchedule extends SpeakeasyBase {
    notificationsEnabled: boolean;
    /**
     * Current status of the payout schedule. One of the following values: SCHEDULED, EXECUTED, FAILED
     */
    scheduleStatus: string;
    scheduledAt: Date;
    /**
     * Optional display name as a hint for who scheduled the payout. Not populated if payout was scheduled by an application.
     */
    scheduledBy?: string;
    /**
     * ID of the user or application that scheduled the payout
     */
    scheduledByPrincipalId: string;
    scheduledFor: Date;
}
