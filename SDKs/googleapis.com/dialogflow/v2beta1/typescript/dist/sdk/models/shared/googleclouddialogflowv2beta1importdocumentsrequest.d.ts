import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1GcsSources } from "./googleclouddialogflowv2beta1gcssources";
import { GoogleCloudDialogflowV2beta1ImportDocumentTemplate } from "./googleclouddialogflowv2beta1importdocumenttemplate";
/**
 * Request message for Documents.ImportDocuments.
 */
export declare class GoogleCloudDialogflowV2beta1ImportDocumentsRequest extends SpeakeasyBase {
    /**
     * The template used for importing documents.
     */
    documentTemplate?: GoogleCloudDialogflowV2beta1ImportDocumentTemplate;
    /**
     * Google Cloud Storage locations for the inputs.
     */
    gcsSource?: GoogleCloudDialogflowV2beta1GcsSources;
    /**
     * Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI.
     */
    importGcsCustomMetadata?: boolean;
}
