import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).
 */
export declare class TimeZone extends SpeakeasyBase {
    /**
     * IANA Time Zone Database time zone, e.g. "America/New_York".
     */
    id?: string;
    /**
     * Optional. IANA Time Zone Database version number, e.g. "2019a".
     */
    version?: string;
}
