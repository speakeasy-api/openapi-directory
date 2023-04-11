import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2GcsSource } from "./googleclouddocumentaiv1beta2gcssource";
/**
 * The desired input location and metadata.
 */
export declare class GoogleCloudDocumentaiV1beta2InputConfig extends SpeakeasyBase {
    /**
     * Content in bytes, represented as a stream of bytes. Note: As with all `bytes` fields, proto buffer messages use a pure binary representation, whereas JSON representations use base64. This field only works for synchronous ProcessDocument method.
     */
    contents?: string;
    /**
     * The Google Cloud Storage location where the input file will be read from.
     */
    gcsSource?: GoogleCloudDocumentaiV1beta2GcsSource;
    /**
     * Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format.
     */
    mimeType?: string;
}
