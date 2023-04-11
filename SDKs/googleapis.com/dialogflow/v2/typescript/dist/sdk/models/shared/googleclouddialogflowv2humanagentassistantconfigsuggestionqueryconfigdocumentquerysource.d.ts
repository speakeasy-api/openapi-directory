import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Document source settings. Supported features: SMART_REPLY, SMART_COMPOSE.
 */
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionQueryConfigDocumentQuerySource extends SpeakeasyBase {
    /**
     * Required. Knowledge documents to query from. Format: `projects//locations//knowledgeBases//documents/`. Currently, at most 5 documents are supported.
     */
    documents?: string[];
}
