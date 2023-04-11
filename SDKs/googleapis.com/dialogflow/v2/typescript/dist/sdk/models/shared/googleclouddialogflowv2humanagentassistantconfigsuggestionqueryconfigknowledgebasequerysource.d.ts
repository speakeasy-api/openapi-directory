import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Knowledge base source settings. Supported features: ARTICLE_SUGGESTION, FAQ.
 */
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigKnowledgeBaseQuerySource extends SpeakeasyBase {
    /**
     * Required. Knowledge bases to query. Format: `projects//locations//knowledgeBases/`. Currently, at most 5 knowledge bases are supported.
     */
    knowledgeBases?: string[];
}
