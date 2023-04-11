import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1AnnotateImageResponse } from "./googlecloudvisionv1p2beta1annotateimageresponse";
/**
 * Response to a batch image annotation request.
 */
export declare class GoogleCloudVisionV1p2beta1BatchAnnotateImagesResponse extends SpeakeasyBase {
    /**
     * Individual responses to image annotation requests within the batch.
     */
    responses?: GoogleCloudVisionV1p2beta1AnnotateImageResponse[];
}
