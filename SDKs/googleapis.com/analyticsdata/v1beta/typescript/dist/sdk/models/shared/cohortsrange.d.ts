import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report.
 */
export declare enum CohortsRangeGranularityEnum {
    GranularityUnspecified = "GRANULARITY_UNSPECIFIED",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY"
}
/**
 * Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over.
 */
export declare class CohortsRange extends SpeakeasyBase {
    /**
     * Required. `endOffset` specifies the end date of the extended reporting date range for a cohort report. `endOffset` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If `granularity` is `DAILY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset` days. If `granularity` is `WEEKLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 7` days. If `granularity` is `MONTHLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 30` days.
     */
    endOffset?: number;
    /**
     * Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report.
     */
    granularity?: CohortsRangeGranularityEnum;
    /**
     * `startOffset` specifies the start date of the extended reporting date range for a cohort report. `startOffset` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If `granularity` is `DAILY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset` days. If `granularity` is `WEEKLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 7` days. If `granularity` is `MONTHLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 30` days.
     */
    startOffset?: number;
}
