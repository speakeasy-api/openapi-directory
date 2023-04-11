import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigcontextfiltersettings";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdialogflowquerysource";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigdocumentquerysource";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionqueryconfigknowledgebasequerysource";
/**
 * Config for suggestion query.
 */
export declare class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfig extends SpeakeasyBase {
    /**
     * Confidence threshold of query result. Agent Assist gives each suggestion a score in the range [0.0, 1.0], based on the relevance between the suggestion and the current conversation context. A score of 0.0 has no relevance, while a score of 1.0 has high relevance. Only suggestions with a score greater than or equal to the value of this field are included in the results. For a baseline model (the default), the recommended value is in the range [0.05, 0.1]. For a custom model, there is no recommended value. Tune this value by starting from a very low value and slowly increasing until you have desired results. If this field is not set, it is default to 0.0, which means that all suggestions are returned. Supported features: ARTICLE_SUGGESTION, FAQ, SMART_REPLY, SMART_COMPOSE.
     */
    confidenceThreshold?: number;
    /**
     * Settings that determine how to filter recent conversation context when generating suggestions.
     */
    contextFilterSettings?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigContextFilterSettings;
    /**
     * Dialogflow source setting. Supported feature: DIALOGFLOW_ASSIST.
     */
    dialogflowQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDialogflowQuerySource;
    /**
     * Document source settings. Supported features: SMART_REPLY, SMART_COMPOSE.
     */
    documentQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource;
    /**
     * Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.
     */
    knowledgeBaseQuerySource?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource;
    /**
     * Maximum number of results to return. Currently, if unset, defaults to 10. And the max number is 20.
     */
    maxResults?: number;
}
