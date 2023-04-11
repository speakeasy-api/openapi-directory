import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2GcsDestination } from "./googleclouddialogflowv2gcsdestination";
/**
 * Request message for Documents.ExportDocument.
 */
export declare class GoogleCloudDialogflowV2ExportDocumentRequest extends SpeakeasyBase {
    /**
     * When enabled, export the full content of the document including empirical probability.
     */
    exportFullContent?: boolean;
    /**
     * Google Cloud Storage location for the output.
     */
    gcsDestination?: GoogleCloudDialogflowV2GcsDestination;
    /**
     * When enabled, export the smart messaging allowlist document for partial update.
     */
    smartMessagingPartialUpdate?: boolean;
}
