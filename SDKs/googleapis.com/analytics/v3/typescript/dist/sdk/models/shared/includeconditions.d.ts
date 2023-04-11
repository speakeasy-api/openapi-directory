import { SpeakeasyBase } from "../../../internal/utils";
/**
 * JSON template for an Analytics Remarketing Include Conditions.
 */
export declare class IncludeConditions extends SpeakeasyBase {
    /**
     * The look-back window lets you specify a time frame for evaluating the behavior that qualifies users for your audience. For example, if your filters include users from Central Asia, and Transactions Greater than 2, and you set the look-back window to 14 days, then any user from Central Asia whose cumulative transactions exceed 2 during the last 14 days is added to the audience.
     */
    daysToLookBack?: number;
    /**
     * Boolean indicating whether this segment is a smart list. https://support.google.com/analytics/answer/4628577
     */
    isSmartList?: boolean;
    /**
     * Resource type for include conditions.
     */
    kind?: string;
    /**
     * Number of days (in the range 1 to 540) a user remains in the audience.
     */
    membershipDurationDays?: number;
    /**
     * The segment condition that will cause a user to be added to an audience.
     */
    segment?: string;
}
