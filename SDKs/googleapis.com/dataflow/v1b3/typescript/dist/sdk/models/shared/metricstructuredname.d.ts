import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies a metric, by describing the source which generated the metric.
 */
export declare class MetricStructuredName extends SpeakeasyBase {
    /**
     * Zero or more labeled fields which identify the part of the job this metric is associated with, such as the name of a step or collection. For example, built-in counters associated with steps will have context['step'] = . Counters associated with PCollections in the SDK will have context['pcollection'] = .
     */
    context?: Record<string, string>;
    /**
     * Worker-defined metric name.
     */
    name?: string;
    /**
     * Origin (namespace) of metric name. May be blank for user-define metrics; will be "dataflow" for metrics defined by the Dataflow service or SDK.
     */
    origin?: string;
}
