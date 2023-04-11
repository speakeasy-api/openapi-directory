import { SpeakeasyBase } from "../../../internal/utils";
export declare class MembershipsDuration extends SpeakeasyBase {
    /**
     * The date and time when the user became a continuous member across all levels.
     */
    memberSince?: string;
    /**
     * The cumulative time the user has been a member across all levels in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDurationMonths?: number;
}
