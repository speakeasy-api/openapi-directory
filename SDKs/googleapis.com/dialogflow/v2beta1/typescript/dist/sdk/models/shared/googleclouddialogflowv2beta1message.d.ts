import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1MessageAnnotation } from "./googleclouddialogflowv2beta1messageannotation";
import { GoogleCloudDialogflowV2beta1SentimentAnalysisResult } from "./googleclouddialogflowv2beta1sentimentanalysisresult";
/**
 * Output only. The role of the participant.
 */
export declare enum GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    HumanAgent = "HUMAN_AGENT",
    AutomatedAgent = "AUTOMATED_AGENT",
    EndUser = "END_USER"
}
/**
 * Represents a message posted into a conversation.
 */
export declare class GoogleCloudDialogflowV2beta1Message extends SpeakeasyBase {
    /**
     * Required. The message content.
     */
    content?: string;
    /**
     * Output only. The time when the message was created in Contact Center AI.
     */
    createTime?: string;
    /**
     * Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * Represents the result of annotation for the message.
     */
    messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
    /**
     * Optional. The unique identifier of the message. Format: `projects//locations//conversations//messages/`.
     */
    name?: string;
    /**
     * Output only. The participant that sends this message.
     */
    participant?: string;
    /**
     * Output only. The role of the participant.
     */
    participantRole?: GoogleCloudDialogflowV2beta1MessageParticipantRoleEnum;
    /**
     * Optional. The time when the message was sent.
     */
    sendTime?: string;
    /**
     * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
     */
    sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}
/**
 * Represents a message posted into a conversation.
 */
export declare class GoogleCloudDialogflowV2beta1MessageInput extends SpeakeasyBase {
    /**
     * Required. The message content.
     */
    content?: string;
    /**
     * Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * Represents the result of annotation for the message.
     */
    messageAnnotation?: GoogleCloudDialogflowV2beta1MessageAnnotation;
    /**
     * Optional. The unique identifier of the message. Format: `projects//locations//conversations//messages/`.
     */
    name?: string;
    /**
     * Optional. The time when the message was sent.
     */
    sendTime?: string;
    /**
     * The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config
     */
    sentimentAnalysis?: GoogleCloudDialogflowV2beta1SentimentAnalysisResult;
}
