import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Sentiment } from "./googleclouddialogflowv2sentiment";
/**
 * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
 */
export declare class GoogleCloudDialogflowV2SentimentAnalysisResult extends SpeakeasyBase {
    /**
     * The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result.
     */
    queryTextSentiment?: GoogleCloudDialogflowV2Sentiment;
}
