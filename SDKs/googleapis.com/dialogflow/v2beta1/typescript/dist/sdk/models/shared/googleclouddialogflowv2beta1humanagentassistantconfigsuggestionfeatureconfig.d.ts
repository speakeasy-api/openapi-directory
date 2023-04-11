import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationmodelconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigconversationprocessconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestiontriggersettings";
import { GoogleCloudDialogflowV2beta1SuggestionFeature } from "./googleclouddialogflowv2beta1suggestionfeature";
/**
 * Config for suggestion features.
 */
export declare class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionFeatureConfig extends SpeakeasyBase {
    /**
     * Custom conversation models used in agent assist feature. Supported feature: ARTICLE_SUGGESTION, SMART_COMPOSE, SMART_REPLY, CONVERSATION_SUMMARIZATION.
     */
    conversationModelConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationModelConfig;
    /**
     * Config to process conversation.
     */
    conversationProcessConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig;
    /**
     * Automatically iterates all participants and tries to compile suggestions. Supported features: ARTICLE_SUGGESTION, FAQ, DIALOGFLOW_ASSIST.
     */
    enableEventBasedSuggestion?: boolean;
    /**
     * Config for suggestion query.
     */
    queryConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig;
    /**
     * The type of Human Agent Assistant API suggestion to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
     */
    suggestionFeature?: GoogleCloudDialogflowV2beta1SuggestionFeature;
    /**
     * Settings of suggestion trigger.
     */
    suggestionTriggerSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionTriggerSettings;
}
