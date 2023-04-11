import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a weekly bucket of instance activity.
 *
 * @see {@link https://docs.joinmastodon.org/entities/activity/}
 */
export declare class Activity extends SpeakeasyBase {
    /**
     * User logins since the week began, String (cast from an integer).
     */
    logins?: string;
    /**
     * User registrations since the week began, String (cast from an integer).
     */
    registrations?: string;
    /**
     * Statuses created since the week began, String (cast from an integer).
     */
    statuses?: string;
    /**
     * Midnight at the first day of the week.  (UNIX Timestamp).
     */
    week?: string;
}
