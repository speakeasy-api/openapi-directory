import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2GcsSources } from "./googleclouddialogflowv2gcssources";
import { GoogleCloudDialogflowV2ImportDocumentTemplate } from "./googleclouddialogflowv2importdocumenttemplate";
/**
 * Request message for Documents.ImportDocuments.
 */
export declare class GoogleCloudDialogflowV2ImportDocumentsRequest extends SpeakeasyBase {
    /**
     * The template used for importing documents.
     */
    documentTemplate?: GoogleCloudDialogflowV2ImportDocumentTemplate;
    /**
     * Google Cloud Storage location for the inputs.
     */
    gcsSource?: GoogleCloudDialogflowV2GcsSources;
    /**
     * Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI.
     */
    importGcsCustomMetadata?: boolean;
}
