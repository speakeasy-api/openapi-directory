import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1Feature } from "./googlecloudvisionv1p1beta1feature";
import { GoogleCloudVisionV1p1beta1Image } from "./googlecloudvisionv1p1beta1image";
import { GoogleCloudVisionV1p1beta1ImageContext } from "./googlecloudvisionv1p1beta1imagecontext";
/**
 * Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.
 */
export declare class GoogleCloudVisionV1p1beta1AnnotateImageRequest extends SpeakeasyBase {
    /**
     * Requested features.
     */
    features?: GoogleCloudVisionV1p1beta1Feature[];
    /**
     * Client image to perform Google Cloud Vision API tasks over.
     */
    image?: GoogleCloudVisionV1p1beta1Image;
    /**
     * Image context and/or feature-specific parameters.
     */
    imageContext?: GoogleCloudVisionV1p1beta1ImageContext;
}
