import { SpeakeasyBase } from "../../../internal/utils";
import { DailyMetricTimeSeries } from "./dailymetrictimeseries";
/**
 * Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries.
 */
export declare class MultiDailyMetricTimeSeries extends SpeakeasyBase {
    /**
     * List of DailyMetric-TimeSeries pairs.
     */
    dailyMetricTimeSeries?: DailyMetricTimeSeries[];
}
