import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Documents.ReloadDocument.
 */
export declare class GoogleCloudDialogflowV2ReloadDocumentRequest extends SpeakeasyBase {
    /**
     * Optional. The path of gcs source file for reloading document content. For now, only gcs uri is supported. For documents stored in Google Cloud Storage, these URIs must have the form `gs:///`.
     */
    contentUri?: string;
    /**
     * Optional. Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI.
     */
    importGcsCustomMetadata?: boolean;
    /**
     * Optional. When enabled, the reload request is to apply partial update to the smart messaging allowlist.
     */
    smartMessagingPartialUpdate?: boolean;
}
