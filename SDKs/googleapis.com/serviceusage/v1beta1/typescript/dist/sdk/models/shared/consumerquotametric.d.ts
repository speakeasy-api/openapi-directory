import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerQuotaLimit } from "./consumerquotalimit";
/**
 * Consumer quota settings for a quota metric.
 */
export declare class ConsumerQuotaMetric extends SpeakeasyBase {
    /**
     * The consumer quota for each quota limit defined on the metric.
     */
    consumerQuotaLimits?: ConsumerQuotaLimit[];
    /**
     * The quota limits targeting the descendant containers of the consumer in request. If the consumer in request is of type `organizations` or `folders`, the field will list per-project limits in the metric; if the consumer in request is of type `project`, the field will be empty. The `quota_buckets` field of each descendant consumer quota limit will not be populated.
     */
    descendantConsumerQuotaLimits?: ConsumerQuotaLimit[];
    /**
     * The display name of the metric. An example name would be: `CPUs`
     */
    displayName?: string;
    /**
     * The name of the metric. An example name would be: `compute.googleapis.com/cpus`
     */
    metric?: string;
    /**
     * The resource name of the quota settings on this metric for this consumer. An example name would be: `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus` The resource name is intended to be opaque and should not be parsed for its component strings, since its representation could change in the future.
     */
    name?: string;
    /**
     * The units in which the metric value is reported.
     */
    unit?: string;
}
