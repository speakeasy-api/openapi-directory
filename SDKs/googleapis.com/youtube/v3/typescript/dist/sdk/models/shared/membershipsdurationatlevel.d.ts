import { SpeakeasyBase } from "../../../internal/utils";
export declare class MembershipsDurationAtLevel extends SpeakeasyBase {
    /**
     * Pricing level ID.
     */
    level?: string;
    /**
     * The date and time when the user became a continuous member for the given level.
     */
    memberSince?: string;
    /**
     * The cumulative time the user has been a member for the given level in complete months (the time is rounded down to the nearest integer).
     */
    memberTotalDurationMonths?: number;
}
