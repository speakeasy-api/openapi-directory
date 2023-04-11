import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30
 */
export declare class RelativeDateRange extends SpeakeasyBase {
    /**
     * The number of days in the requested date range, for example, for a range spanning today: 1. For a range spanning the last 7 days: 7.
     */
    durationDays?: number;
    /**
     * The end date of the filter set, specified as the number of days before today, for example, for a range where the last date is today: 0.
     */
    offsetDays?: number;
}
