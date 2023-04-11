import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
 */
export declare class DatafeedFetchSchedule extends SpeakeasyBase {
    /**
     * The day of the month the feed file should be fetched (1-31).
     */
    dayOfMonth?: number;
    /**
     * The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.
     */
    fetchUrl?: string;
    /**
     * The hour of the day the feed file should be fetched (0-23).
     */
    hour?: number;
    /**
     * The minute of the hour the feed file should be fetched (0-59). Read-only.
     */
    minuteOfHour?: number;
    /**
     * An optional password for fetch_url.
     */
    password?: string;
    /**
     * Whether the scheduled fetch is paused or not.
     */
    paused?: boolean;
    /**
     * Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles".
     */
    timeZone?: string;
    /**
     * An optional user name for fetch_url.
     */
    username?: string;
    /**
     * The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" - "`thursday`" - "`friday`" - "`saturday`" - "`sunday`"
     */
    weekday?: string;
}
