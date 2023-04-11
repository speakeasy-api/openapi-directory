import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig } from "./googleclouddialogflowv2humanagentassistantconfigmessageanalysisconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
/**
 * Defines the Human Agent Assist to connect to a conversation.
 */
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfig extends SpeakeasyBase {
    /**
     * Detail human agent assistant config.
     */
    endUserSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
    /**
     * Detail human agent assistant config.
     */
    humanAgentSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
    /**
     * Configuration for analyses to run on each conversation message.
     */
    messageAnalysisConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;
    /**
     * Defines notification behavior.
     */
    notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
}
