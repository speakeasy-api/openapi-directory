import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Sets the day of the week and hour of the day that a business starts a
 *
 * @remarks
 * workweek. This is used to calculate overtime pay.
 */
export declare class WorkweekConfig extends SpeakeasyBase {
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    createdAt?: string;
    /**
     * The UUID for this object.
     */
    id?: string;
    /**
     * The local time at which a business week ends. Represented as a
     *
     * @remarks
     * string in `HH:MM` format (`HH:MM:SS` is also accepted, but seconds are
     * truncated).
     */
    startOfDayLocalTime: string;
    /**
     * The day of the week on which a business week ends for
     *
     * @remarks
     * compensation purposes.
     */
    startOfWeek: string;
    /**
     * A read-only timestamp in RFC 3339 format; presented in UTC.
     */
    updatedAt?: string;
    /**
     * Used for resolving concurrency issues. The request fails if the version
     *
     * @remarks
     * provided does not match the server version at the time of the request. If not provided,
     * Square executes a blind write; potentially overwriting data from another
     * write.
     */
    version?: number;
}
