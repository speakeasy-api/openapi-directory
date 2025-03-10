import { SpeakeasyBase } from "../../../internal/utils";
import { DistributionCut } from "./distributioncut";
import { TimeSeriesRatio } from "./timeseriesratio";
/**
 * Service Level Indicators for which atomic units of service are counted directly.
 */
export declare class RequestBasedSli extends SpeakeasyBase {
    /**
     * A DistributionCut defines a TimeSeries and thresholds used for measuring good service and total service. The TimeSeries must have ValueType = DISTRIBUTION and MetricKind = DELTA or MetricKind = CUMULATIVE. The computed good_service will be the estimated count of values in the Distribution that fall within the specified min and max.
     */
    distributionCut?: DistributionCut;
    /**
     * A TimeSeriesRatio specifies two TimeSeries to use for computing the good_service / total_service ratio. The specified TimeSeries must have ValueType = DOUBLE or ValueType = INT64 and must have MetricKind = DELTA or MetricKind = CUMULATIVE. The TimeSeriesRatio must specify exactly two of good, bad, and total, and the relationship good_service + bad_service = total_service will be assumed.
     */
    goodTotalRatio?: TimeSeriesRatio;
}
