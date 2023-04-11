import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1GcsSource } from "./googlecloudvisionv1p2beta1gcssource";
/**
 * The desired input location and metadata.
 */
export declare class GoogleCloudVisionV1p2beta1InputConfig extends SpeakeasyBase {
    /**
     * File content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateFiles requests. It does not work for AsyncBatchAnnotateFiles requests.
     */
    content?: string;
    /**
     * The Google Cloud Storage location where the input will be read from.
     */
    gcsSource?: GoogleCloudVisionV1p2beta1GcsSource;
    /**
     * The type of the file. Currently only "application/pdf", "image/tiff" and "image/gif" are supported. Wildcards are not supported.
     */
    mimeType?: string;
}
