import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container of information about an image.
 */
export declare class GoogleCloudDatalabelingV1beta1ImagePayload extends SpeakeasyBase {
    /**
     * A byte string of a thumbnail image.
     */
    imageThumbnail?: string;
    /**
     * Image uri from the user bucket.
     */
    imageUri?: string;
    /**
     * Image format.
     */
    mimeType?: string;
    /**
     * Signed uri of the image file in the service bucket.
     */
    signedUri?: string;
}
