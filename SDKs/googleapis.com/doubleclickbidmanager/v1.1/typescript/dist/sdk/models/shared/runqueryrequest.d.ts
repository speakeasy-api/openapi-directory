import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Report data range used to generate the report.
 */
export declare enum RunQueryRequestDataRangeEnum {
    CustomDates = "CUSTOM_DATES",
    CurrentDay = "CURRENT_DAY",
    PreviousDay = "PREVIOUS_DAY",
    WeekToDate = "WEEK_TO_DATE",
    MonthToDate = "MONTH_TO_DATE",
    QuarterToDate = "QUARTER_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    PreviousWeek = "PREVIOUS_WEEK",
    PreviousHalfMonth = "PREVIOUS_HALF_MONTH",
    PreviousMonth = "PREVIOUS_MONTH",
    PreviousQuarter = "PREVIOUS_QUARTER",
    PreviousYear = "PREVIOUS_YEAR",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS",
    Last90Days = "LAST_90_DAYS",
    Last365Days = "LAST_365_DAYS",
    AllTime = "ALL_TIME",
    Last14Days = "LAST_14_DAYS",
    TypeNotSupported = "TYPE_NOT_SUPPORTED",
    Last60Days = "LAST_60_DAYS"
}
/**
 * Request to run a stored query to generate a report.
 */
export declare class RunQueryRequest extends SpeakeasyBase {
    /**
     * Report data range used to generate the report.
     */
    dataRange?: RunQueryRequestDataRangeEnum;
    /**
     * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataEndTimeMs?: string;
    /**
     * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
     */
    reportDataStartTimeMs?: string;
    /**
     * Canonical timezone code for report data time. Defaults to America/New_York.
     */
    timezoneCode?: string;
}
