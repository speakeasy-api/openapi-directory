import { SpeakeasyBase } from "../../../internal/utils";
/**
 * rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series.
 */
export declare enum StatisticalTimeSeriesFilterRankingMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    MethodClusterOutlier = "METHOD_CLUSTER_OUTLIER"
}
/**
 * A filter that ranks streams based on their statistical relation to other streams in a request. Note: This field is deprecated and completely ignored by the API.
 */
export declare class StatisticalTimeSeriesFilter extends SpeakeasyBase {
    /**
     * How many time series to output.
     */
    numTimeSeries?: number;
    /**
     * rankingMethod is applied to a set of time series, and then the produced value for each individual time series is used to compare a given time series to others. These are methods that cannot be applied stream-by-stream, but rather require the full context of a request to evaluate time series.
     */
    rankingMethod?: StatisticalTimeSeriesFilterRankingMethodEnum;
}
