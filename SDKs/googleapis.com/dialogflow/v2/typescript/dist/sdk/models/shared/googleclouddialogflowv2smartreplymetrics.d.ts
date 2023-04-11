import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics } from "./googleclouddialogflowv2smartreplymetricstopnmetrics";
/**
 * The evaluation metrics for smart reply model.
 */
export declare class GoogleCloudDialogflowV2SmartReplyMetrics extends SpeakeasyBase {
    /**
     * Percentage of target participant messages in the evaluation dataset for which similar messages have appeared at least once in the allowlist. Should be [0, 1].
     */
    allowlistCoverage?: number;
    /**
     * Total number of conversations used to generate this metric.
     */
    conversationCount?: string;
    /**
     * Metrics of top n smart replies, sorted by TopNMetric.n.
     */
    topNMetrics?: GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics[];
}
