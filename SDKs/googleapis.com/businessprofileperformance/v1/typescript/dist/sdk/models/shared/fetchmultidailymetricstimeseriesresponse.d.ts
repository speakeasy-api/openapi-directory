import { SpeakeasyBase } from "../../../internal/utils";
import { MultiDailyMetricTimeSeries } from "./multidailymetrictimeseries";
/**
 * Represents the response for FetchMultiDailyMetricsTimeSeries.
 */
export declare class FetchMultiDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
    /**
     * DailyMetrics and their corresponding time series.
     */
    multiDailyMetricTimeSeries?: MultiDailyMetricTimeSeries[];
}
