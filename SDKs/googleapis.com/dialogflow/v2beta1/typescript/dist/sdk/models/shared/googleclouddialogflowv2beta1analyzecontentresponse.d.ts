import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AutomatedAgentReply } from "./googleclouddialogflowv2beta1automatedagentreply";
import { GoogleCloudDialogflowV2beta1DtmfParameters } from "./googleclouddialogflowv2beta1dtmfparameters";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";
import { GoogleCloudDialogflowV2beta1OutputAudio } from "./googleclouddialogflowv2beta1outputaudio";
import { GoogleCloudDialogflowV2beta1SuggestionResult } from "./googleclouddialogflowv2beta1suggestionresult";
/**
 * The response message for Participants.AnalyzeContent.
 */
export declare class GoogleCloudDialogflowV2beta1AnalyzeContentResponse extends SpeakeasyBase {
    /**
     * Represents a response from an automated agent.
     */
    automatedAgentReply?: GoogleCloudDialogflowV2beta1AutomatedAgentReply;
    /**
     * The message in the response that indicates the parameters of DTMF.
     */
    dtmfParameters?: GoogleCloudDialogflowV2beta1DtmfParameters;
    /**
     * The suggestions for end user. The order is the same as HumanAgentAssistantConfig.SuggestionConfig.feature_configs of HumanAgentAssistantConfig.end_user_suggestion_config. Same as human_agent_suggestion_results, any failure of Agent Assist features will not lead to the overall failure of an AnalyzeContent API call. Instead, the features will fail silently with the error field set in the corresponding SuggestionResult.
     */
    endUserSuggestionResults?: GoogleCloudDialogflowV2beta1SuggestionResult[];
    /**
     * The suggestions for most recent human agent. The order is the same as HumanAgentAssistantConfig.SuggestionConfig.feature_configs of HumanAgentAssistantConfig.human_agent_suggestion_config. Note that any failure of Agent Assist features will not lead to the overall failure of an AnalyzeContent API call. Instead, the features will fail silently with the error field set in the corresponding SuggestionResult.
     */
    humanAgentSuggestionResults?: GoogleCloudDialogflowV2beta1SuggestionResult[];
    /**
     * Represents a message posted into a conversation.
     */
    message?: GoogleCloudDialogflowV2beta1Message;
    /**
     * Represents the natural language speech audio to be played to the end user.
     */
    replyAudio?: GoogleCloudDialogflowV2beta1OutputAudio;
    /**
     * Output only. The output text content. This field is set if the automated agent responded with text to show to the user.
     */
    replyText?: string;
}
