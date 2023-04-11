import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Print historical API usage.
 */
export declare class APIUsageAggregatedOut extends SpeakeasyBase {
    /**
     * apiServices as column headers
     */
    colHeaders?: string[];
    /**
     * Data points : usage per DAY, WEEK or MONTH and per apiService
     */
    data?: number[][];
    /**
     * If the history was truncaded due to data limit
     */
    historyTruncated?: boolean;
    /**
     * End datetime of the reporting period
     */
    periodEnd?: number;
    /**
     * Start datetime of the reporting period
     */
    periodStart?: number;
    /**
     * dates as row headers
     */
    rowHeaders?: string[];
    /**
     * Time unit is DAY, WEEK or MONTH depending on prior usage
     */
    timeUnit?: string;
    /**
     * Total usage in the current period
     */
    totalUsage?: number;
}
