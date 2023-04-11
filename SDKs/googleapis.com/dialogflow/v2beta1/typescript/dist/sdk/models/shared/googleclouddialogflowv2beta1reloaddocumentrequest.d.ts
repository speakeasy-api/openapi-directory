import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1GcsSource } from "./googleclouddialogflowv2beta1gcssource";
/**
 * Request message for Documents.ReloadDocument.
 */
export declare class GoogleCloudDialogflowV2beta1ReloadDocumentRequest extends SpeakeasyBase {
    /**
     * Google Cloud Storage location for single input.
     */
    gcsSource?: GoogleCloudDialogflowV2beta1GcsSource;
    /**
     * Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI.
     */
    importGcsCustomMetadata?: boolean;
}
