import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.
 */
export declare class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource extends SpeakeasyBase {
    /**
     * Required. Knowledge bases to query. Format: `projects//locations//knowledgeBases/`. Currently, only one knowledge base is supported.
     */
    knowledgeBases?: string[];
}
