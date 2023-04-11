import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A range defined by two dates. Used for filtering a query for Connect v2
 *
 * @remarks
 * objects that have date properties.
 */
export declare class DateRange extends SpeakeasyBase {
    /**
     * A string in `YYYY-MM-DD` format, such as `2017-10-31`, per the ISO 8601
     *
     * @remarks
     * extended format for calendar dates.
     * The end of a date range (inclusive).
     */
    endDate?: string;
    /**
     * A string in `YYYY-MM-DD` format, such as `2017-10-31`, per the ISO 8601
     *
     * @remarks
     * extended format for calendar dates.
     * The beginning of a date range (inclusive).
     */
    startDate?: string;
}
