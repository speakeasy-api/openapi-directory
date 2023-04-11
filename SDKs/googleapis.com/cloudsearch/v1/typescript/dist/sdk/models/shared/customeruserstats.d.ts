import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare class CustomerUserStats extends SpeakeasyBase {
    /**
     * Represents a whole calendar date, for example a date of birth. The time of day and time zone are either specified elsewhere or are not significant. The date is relative to the [Proleptic Gregorian Calendar](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar). The date must be a valid calendar date between the year 1 and 9999.
     */
    date?: Date;
    /**
     * The count of unique active users in the past one day
     */
    oneDayActiveUsersCount?: string;
    /**
     * The count of unique active users in the past seven days
     */
    sevenDaysActiveUsersCount?: string;
    /**
     * The count of unique active users in the past thirty days
     */
    thirtyDaysActiveUsersCount?: string;
}
