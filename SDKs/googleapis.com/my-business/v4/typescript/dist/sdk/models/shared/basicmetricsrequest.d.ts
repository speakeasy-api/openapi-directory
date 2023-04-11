import { SpeakeasyBase } from "../../../internal/utils";
import { MetricRequest } from "./metricrequest";
import { TimeRange } from "./timerange";
/**
 * A request for basic metric insights.
 */
export declare class BasicMetricsRequest extends SpeakeasyBase {
    /**
     * A collection of metrics to return values for including the options for how the data should be returned.
     */
    metricRequests?: MetricRequest[];
    /**
     * A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).
     */
    timeRange?: TimeRange;
}
