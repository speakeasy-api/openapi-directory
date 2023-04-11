import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures the types of sentiment analysis to perform.
 */
export declare class GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig extends SpeakeasyBase {
    /**
     * Instructs the service to perform sentiment analysis on `query_text`. If not provided, sentiment analysis is not performed on `query_text`.
     */
    analyzeQueryTextSentiment?: boolean;
}
