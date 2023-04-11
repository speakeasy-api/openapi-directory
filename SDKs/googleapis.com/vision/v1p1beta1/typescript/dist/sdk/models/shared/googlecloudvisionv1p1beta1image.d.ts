import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1ImageSource } from "./googlecloudvisionv1p1beta1imagesource";
/**
 * Client image to perform Google Cloud Vision API tasks over.
 */
export declare class GoogleCloudVisionV1p1beta1Image extends SpeakeasyBase {
    /**
     * Image content, represented as a stream of bytes. Note: As with all `bytes` fields, protobuffers use a pure binary representation, whereas JSON representations use base64. Currently, this field only works for BatchAnnotateImages requests. It does not work for AsyncBatchAnnotateImages requests.
     */
    content?: string;
    /**
     * External image source (Google Cloud Storage or web URL image location).
     */
    source?: GoogleCloudVisionV1p1beta1ImageSource;
}
