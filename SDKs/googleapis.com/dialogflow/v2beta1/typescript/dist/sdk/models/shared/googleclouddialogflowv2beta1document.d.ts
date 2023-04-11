import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1DocumentReloadStatus } from "./googleclouddialogflowv2beta1documentreloadstatus";
export declare enum GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum {
    KnowledgeTypeUnspecified = "KNOWLEDGE_TYPE_UNSPECIFIED",
    Faq = "FAQ",
    ExtractiveQa = "EXTRACTIVE_QA",
    ArticleSuggestion = "ARTICLE_SUGGESTION",
    AgentFacingSmartReply = "AGENT_FACING_SMART_REPLY",
    SmartReply = "SMART_REPLY"
}
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
 */
export declare class GoogleCloudDialogflowV2beta1DocumentInput extends SpeakeasyBase {
    /**
     * The raw content of the document. This field is only permitted for EXTRACTIVE_QA and FAQ knowledge types. Note: This field is in the process of being deprecated, please use raw_content instead.
     */
    content?: string;
    /**
     * The URI where the file content is located. For documents stored in Google Cloud Storage, these URIs must have the form `gs:///`. NOTE: External URLs must correspond to public webpages, i.e., they must be indexed by Google Search. In particular, URLs for showing documents in Google Cloud Storage (i.e. the URL in your browser) are not supported. Instead use the `gs://` format URI described above.
     */
    contentUri?: string;
    /**
     * Required. The display name of the document. The name must be 1024 bytes or less; otherwise, the creation request fails.
     */
    displayName?: string;
    /**
     * Optional. If true, we try to automatically reload the document every day (at a time picked by the system). If false or unspecified, we don't try to automatically reload the document. Currently you can only enable automatic reload for documents sourced from a public url, see `source` field for the source types. Reload status can be tracked in `latest_reload_status`. If a reload fails, we will keep the document unchanged. If a reload fails with internal errors, the system will try to reload the document on the next day. If a reload fails with non-retriable errors (e.g. PERMISSION_DENIED), the system will not try to reload the document anymore. You need to manually reload the document successfully by calling `ReloadDocument` and clear the errors.
     */
    enableAutoReload?: boolean;
    /**
     * Required. The knowledge type of document content.
     */
    knowledgeTypes?: GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum[];
    /**
     * The status of a reload attempt.
     */
    latestReloadStatus?: GoogleCloudDialogflowV2beta1DocumentReloadStatus;
    /**
     * Optional. Metadata for the document. The metadata supports arbitrary key-value pairs. Suggested use cases include storing a document's title, an external URL distinct from the document's content_uri, etc. The max size of a `key` or a `value` of the metadata is 1024 bytes.
     */
    metadata?: Record<string, string>;
    /**
     * Required. The MIME type of this document.
     */
    mimeType?: string;
    /**
     * Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     */
    name?: string;
    /**
     * The raw content of the document. This field is only permitted for EXTRACTIVE_QA and FAQ knowledge types.
     */
    rawContent?: string;
}
/**
 * Output only. The current state of the document.
 */
export declare enum GoogleCloudDialogflowV2beta1DocumentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Reloading = "RELOADING",
    Deleting = "DELETING"
}
/**
 * A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
 */
export declare class GoogleCloudDialogflowV2beta1Document extends SpeakeasyBase {
    /**
     * The raw content of the document. This field is only permitted for EXTRACTIVE_QA and FAQ knowledge types. Note: This field is in the process of being deprecated, please use raw_content instead.
     */
    content?: string;
    /**
     * The URI where the file content is located. For documents stored in Google Cloud Storage, these URIs must have the form `gs:///`. NOTE: External URLs must correspond to public webpages, i.e., they must be indexed by Google Search. In particular, URLs for showing documents in Google Cloud Storage (i.e. the URL in your browser) are not supported. Instead use the `gs://` format URI described above.
     */
    contentUri?: string;
    /**
     * Required. The display name of the document. The name must be 1024 bytes or less; otherwise, the creation request fails.
     */
    displayName?: string;
    /**
     * Optional. If true, we try to automatically reload the document every day (at a time picked by the system). If false or unspecified, we don't try to automatically reload the document. Currently you can only enable automatic reload for documents sourced from a public url, see `source` field for the source types. Reload status can be tracked in `latest_reload_status`. If a reload fails, we will keep the document unchanged. If a reload fails with internal errors, the system will try to reload the document on the next day. If a reload fails with non-retriable errors (e.g. PERMISSION_DENIED), the system will not try to reload the document anymore. You need to manually reload the document successfully by calling `ReloadDocument` and clear the errors.
     */
    enableAutoReload?: boolean;
    /**
     * Required. The knowledge type of document content.
     */
    knowledgeTypes?: GoogleCloudDialogflowV2beta1DocumentKnowledgeTypesEnum[];
    /**
     * The status of a reload attempt.
     */
    latestReloadStatus?: GoogleCloudDialogflowV2beta1DocumentReloadStatus;
    /**
     * Optional. Metadata for the document. The metadata supports arbitrary key-value pairs. Suggested use cases include storing a document's title, an external URL distinct from the document's content_uri, etc. The max size of a `key` or a `value` of the metadata is 1024 bytes.
     */
    metadata?: Record<string, string>;
    /**
     * Required. The MIME type of this document.
     */
    mimeType?: string;
    /**
     * Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     */
    name?: string;
    /**
     * The raw content of the document. This field is only permitted for EXTRACTIVE_QA and FAQ knowledge types.
     */
    rawContent?: string;
    /**
     * Output only. The current state of the document.
     */
    state?: GoogleCloudDialogflowV2beta1DocumentStateEnum;
}
