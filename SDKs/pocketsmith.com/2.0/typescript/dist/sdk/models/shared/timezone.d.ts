import { SpeakeasyBase } from "../../../internal/utils";
export declare class TimeZone extends SpeakeasyBase {
    /**
     * The abbreviation of the time zone.
     */
    abbreviation?: string;
    /**
     * The formatted name of the time zone.
     */
    formattedName?: string;
    /**
     * The formatted offset of the time zone.
     */
    formattedOffset?: string;
    /**
     * The tz database name of the time zone.
     */
    identifier?: string;
    /**
     * The name of the time zone.
     */
    name?: string;
    /**
     * The time zone's UTC offset in seconds.
     */
    utcOffset?: number;
}
