import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The message for input config in batch process.
 */
export declare class GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig extends SpeakeasyBase {
    /**
     * The Cloud Storage location as the source of the document.
     */
    gcsSource?: string;
    /**
     * Mimetype of the input. If the input is a raw document, the supported mimetypes are application/pdf, image/tiff, and image/gif. If the input is a [Document] proto, the type should be application/json.
     */
    mimeType?: string;
}
