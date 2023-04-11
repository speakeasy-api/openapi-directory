import { SpeakeasyBase } from "../../../internal/utils";
import { MetricRange } from "./metricrange";
import { PerformanceThreshold } from "./performancethreshold";
/**
 * A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
 */
export declare class WindowsBasedSli extends SpeakeasyBase {
    /**
     * A monitoring filter (https://cloud.google.com/monitoring/api/v3/filters) specifying a TimeSeries with ValueType = BOOL. The window is good if any true values appear in the window.
     */
    goodBadMetricFilter?: string;
    /**
     * A PerformanceThreshold is used when each window is good when that window has a sufficiently high performance.
     */
    goodTotalRatioThreshold?: PerformanceThreshold;
    /**
     * A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
     */
    metricMeanInRange?: MetricRange;
    /**
     * A MetricRange is used when each window is good when the value x of a single TimeSeries satisfies range.min <= x <= range.max. The provided TimeSeries must have ValueType = INT64 or ValueType = DOUBLE and MetricKind = GAUGE.
     */
    metricSumInRange?: MetricRange;
    /**
     * Duration over which window quality is evaluated. Must be an integer fraction of a day and at least 60s.
     */
    windowPeriod?: string;
}
