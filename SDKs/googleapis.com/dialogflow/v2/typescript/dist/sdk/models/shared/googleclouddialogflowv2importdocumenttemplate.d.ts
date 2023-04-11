import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY"
}
/**
 * The template used for importing documents.
 */
export declare class GoogleCloudDialogflowV2ImportDocumentTemplate extends SpeakeasyBase {
    /**
     * Required. The knowledge type of document content.
     */
    knowledgeTypes?: GoogleCloudDialogflowV2ImportDocumentTemplateKnowledgeTypesEnum[];
    /**
     * Metadata for the document. The metadata supports arbitrary key-value pairs. Suggested use cases include storing a document's title, an external URL distinct from the document's content_uri, etc. The max size of a `key` or a `value` of the metadata is 1024 bytes.
     */
    metadata?: Record<string, string>;
    /**
     * Required. The MIME type of the document.
     */
    mimeType?: string;
}
