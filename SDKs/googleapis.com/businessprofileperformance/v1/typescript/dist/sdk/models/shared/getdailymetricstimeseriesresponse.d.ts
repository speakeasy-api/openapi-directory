import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeries } from "./timeseries";
/**
 * Represents the response for GetDailyMetricsTimeSeries.
 */
export declare class GetDailyMetricsTimeSeriesResponse extends SpeakeasyBase {
    /**
     * Represents a timeseries.
     */
    timeSeries?: TimeSeries;
}
