import { SpeakeasyBase } from "../../../internal/utils";
import { V1Beta1ConsumerQuotaMetric } from "./v1beta1consumerquotametric";
/**
 * Response message for ListConsumerQuotaMetrics.
 */
export declare class V1Beta1ListConsumerQuotaMetricsResponse extends SpeakeasyBase {
    /**
     * Quota settings for the consumer, organized by quota metric.
     */
    metrics?: V1Beta1ConsumerQuotaMetric[];
    /**
     * Token identifying which result to start with; returned by a previous list call.
     */
    nextPageToken?: string;
}
