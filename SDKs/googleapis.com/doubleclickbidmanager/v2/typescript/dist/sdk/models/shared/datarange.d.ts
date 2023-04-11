import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Report data range used to generate the report.
 */
export declare enum DataRangeRangeEnum {
    RangeUnspecified = "RANGE_UNSPECIFIED",
    CustomDates = "CUSTOM_DATES",
    CurrentDay = "CURRENT_DAY",
    PreviousDay = "PREVIOUS_DAY",
    WeekToDate = "WEEK_TO_DATE",
    MonthToDate = "MONTH_TO_DATE",
    QuarterToDate = "QUARTER_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    PreviousWeek = "PREVIOUS_WEEK",
    PreviousMonth = "PREVIOUS_MONTH",
    PreviousQuarter = "PREVIOUS_QUARTER",
    PreviousYear = "PREVIOUS_YEAR",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS",
    Last90Days = "LAST_90_DAYS",
    Last365Days = "LAST_365_DAYS",
    AllTime = "ALL_TIME",
    Last14Days = "LAST_14_DAYS",
    Last60Days = "LAST_60_DAYS"
}
/**
 * Report data range.
 */
export declare class DataRange extends SpeakeasyBase {
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    customEndDate?: Date;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    customStartDate?: Date;
    /**
     * Report data range used to generate the report.
     */
    range?: DataRangeRangeEnum;
}
