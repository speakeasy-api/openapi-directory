import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a period of time during which a business location is open.
 */
export declare class BusinessHoursPeriod extends SpeakeasyBase {
    /**
     * The day of week for this time period.
     */
    dayOfWeek?: string;
    /**
     * The end time of a business hours period, specified in local time using partial-time
     *
     * @remarks
     * RFC 3339 format.
     */
    endLocalTime?: string;
    /**
     * The start time of a business hours period, specified in local time using partial-time
     *
     * @remarks
     * RFC 3339 format.
     */
    startLocalTime?: string;
}
