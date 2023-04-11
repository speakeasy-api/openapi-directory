import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig } from "./googleclouddialogflowv2humanagentassistantconfigconversationmodelconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig } from "./googleclouddialogflowv2humanagentassistantconfigconversationprocessconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionqueryconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings } from "./googleclouddialogflowv2humanagentassistantconfigsuggestiontriggersettings";
import { GoogleCloudDialogflowV2SuggestionFeature } from "./googleclouddialogflowv2suggestionfeature";
/**
 * Config for suggestion features.
 */
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionFeatureConfig extends SpeakeasyBase {
    /**
     * Custom conversation models used in agent assist feature. Supported feature: ARTICLE_SUGGESTION, SMART_COMPOSE, SMART_REPLY, CONVERSATION_SUMMARIZATION.
     */
    conversationModelConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig;
    /**
     * Config to process conversation.
     */
    conversationProcessConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig;
    /**
     * Automatically iterates all participants and tries to compile suggestions. Supported features: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST.
     */
    enableEventBasedSuggestion?: boolean;
    /**
     * Config for suggestion query.
     */
    queryConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfig;
    /**
     * The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
     */
    suggestionFeature?: GoogleCloudDialogflowV2SuggestionFeature;
    /**
     * Settings of suggestion trigger.
     */
    suggestionTriggerSettings?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionTriggerSettings;
}
