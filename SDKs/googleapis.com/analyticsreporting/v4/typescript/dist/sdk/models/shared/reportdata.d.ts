import { SpeakeasyBase } from "../../../internal/utils";
import { DateRangeValues } from "./daterangevalues";
import { ReportRow } from "./reportrow";
/**
 * The data part of the report.
 */
export declare class ReportData extends SpeakeasyBase {
    /**
     * The last time the data in the report was refreshed. All the hits received before this timestamp are included in the calculation of the report.
     */
    dataLastRefreshed?: string;
    /**
     * If empty reason is specified, the report is empty for this reason.
     */
    emptyReason?: string;
    /**
     * Indicates if response to this request is golden or not. Data is golden when the exact same request will not produce any new results if asked at a later point in time.
     */
    isDataGolden?: boolean;
    /**
     * Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero.
     */
    maximums?: DateRangeValues[];
    /**
     * Minimum and maximum values seen over all matching rows. These are both empty when `hideValueRanges` in the request is false, or when rowCount is zero.
     */
    minimums?: DateRangeValues[];
    /**
     * Total number of matching rows for this query.
     */
    rowCount?: number;
    /**
     * There's one ReportRow for every unique combination of dimensions.
     */
    rows?: ReportRow[];
    /**
     * If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples read, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.
     */
    samplesReadCounts?: string[];
    /**
     * If the results are [sampled](https://support.google.com/analytics/answer/2637192), this returns the total number of samples present, one entry per date range. If the results are not sampled this field will not be defined. See [developer guide](/analytics/devguides/reporting/core/v4/basics#sampling) for details.
     */
    samplingSpaceSizes?: string[];
    /**
     * For each requested date range, for the set of all rows that match the query, every requested value format gets a total. The total for a value format is computed by first totaling the metrics mentioned in the value format and then evaluating the value format as a scalar expression. E.g., The "totals" for `3 / (ga:sessions + 2)` we compute `3 / ((sum of all relevant ga:sessions) + 2)`. Totals are computed before pagination.
     */
    totals?: DateRangeValues[];
}
