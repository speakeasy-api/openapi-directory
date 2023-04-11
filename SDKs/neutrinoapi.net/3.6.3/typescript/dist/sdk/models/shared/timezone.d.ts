import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Map containing timezone details
 */
export declare class Timezone extends SpeakeasyBase {
    /**
     * The time zone abbreviation
     */
    abbr: string;
    /**
     * The current date at the time zone (ISO 8601 format 'YYYY-MM-DD')
     */
    date: string;
    /**
     * The time zone ID as per the IANA time zone database (tzdata)
     */
    id: string;
    /**
     * The full time zone name
     */
    name: string;
    /**
     * The UTC offset for the time zone (ISO 8601 format '±hh:mm')
     */
    offset: string;
    /**
     * The current time at the time zone (ISO 8601 format 'hh:mm:ss.sss')
     */
    time: string;
}
