import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation metrics when retrieving `n` smart replies with the model.
 */
export declare class GoogleCloudDialogflowV2SmartReplyMetricsTopNMetrics extends SpeakeasyBase {
    /**
     * Number of retrieved smart replies. For example, when `n` is 3, this evaluation contains metrics for when Dialogflow retrieves 3 smart replies with the model.
     */
    n?: number;
    /**
     * Defined as `number of queries whose top n smart replies have at least one similar (token match similarity above the defined threshold) reply as the real reply` divided by `number of queries with at least one smart reply`. Value ranges from 0.0 to 1.0 inclusive.
     */
    recall?: number;
}
