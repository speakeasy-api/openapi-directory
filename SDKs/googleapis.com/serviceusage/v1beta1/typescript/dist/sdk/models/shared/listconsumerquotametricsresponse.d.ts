import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerQuotaMetric } from "./consumerquotametric";
/**
 * Response message for ListConsumerQuotaMetrics
 */
export declare class ListConsumerQuotaMetricsResponse extends SpeakeasyBase {
    /**
     * Quota settings for the consumer, organized by quota metric.
     */
    metrics?: ConsumerQuotaMetric[];
    /**
     * Token identifying which result to start with; returned by a previous list call.
     */
    nextPageToken?: string;
}
