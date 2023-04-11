import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AutomatedAgentReply } from "./googleclouddialogflowv2automatedagentreply";
import { GoogleCloudDialogflowV2DtmfParameters } from "./googleclouddialogflowv2dtmfparameters";
import { GoogleCloudDialogflowV2Message } from "./googleclouddialogflowv2message";
import { GoogleCloudDialogflowV2OutputAudio } from "./googleclouddialogflowv2outputaudio";
import { GoogleCloudDialogflowV2SuggestionResult } from "./googleclouddialogflowv2suggestionresult";
/**
 * The response message for Participants.AnalyzeContent.
 */
export declare class GoogleCloudDialogflowV2AnalyzeContentResponse extends SpeakeasyBase {
    /**
     * Represents a response from an automated agent.
     */
    automatedAgentReply?: GoogleCloudDialogflowV2AutomatedAgentReply;
    /**
     * The message in the response that indicates the parameters of DTMF.
     */
    dtmfParameters?: GoogleCloudDialogflowV2DtmfParameters;
    /**
     * The suggestions for end user. The order is the same as HumanAgentAssistantConfig.SuggestionConfig.feature_configs of HumanAgentAssistantConfig.end_user_suggestion_config. Same as human_agent_suggestion_results, any failure of Agent Assist features will not lead to the overall failure of an AnalyzeContent API call. Instead, the features will fail silently with the error field set in the corresponding SuggestionResult.
     */
    endUserSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];
    /**
     * The suggestions for most recent human agent. The order is the same as HumanAgentAssistantConfig.SuggestionConfig.feature_configs of HumanAgentAssistantConfig.human_agent_suggestion_config. Note that any failure of Agent Assist features will not lead to the overall failure of an AnalyzeContent API call. Instead, the features will fail silently with the error field set in the corresponding SuggestionResult.
     */
    humanAgentSuggestionResults?: GoogleCloudDialogflowV2SuggestionResult[];
    /**
     * Represents a message posted into a conversation.
     */
    message?: GoogleCloudDialogflowV2Message;
    /**
     * Represents the natural language speech audio to be played to the end user.
     */
    replyAudio?: GoogleCloudDialogflowV2OutputAudio;
    /**
     * The output text content. This field is set if the automated agent responded with text to show to the user.
     */
    replyText?: string;
}
