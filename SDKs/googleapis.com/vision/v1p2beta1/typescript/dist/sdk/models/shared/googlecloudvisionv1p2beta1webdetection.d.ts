import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1WebDetectionWebEntity } from "./googlecloudvisionv1p2beta1webdetectionwebentity";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";
import { GoogleCloudVisionV1p2beta1WebDetectionWebLabel } from "./googlecloudvisionv1p2beta1webdetectionweblabel";
import { GoogleCloudVisionV1p2beta1WebDetectionWebPage } from "./googlecloudvisionv1p2beta1webdetectionwebpage";
/**
 * Relevant information for the image from the Internet.
 */
export declare class GoogleCloudVisionV1p2beta1WebDetection extends SpeakeasyBase {
    /**
     * The service's best guess as to the topic of the request image. Inferred from similar images on the open web.
     */
    bestGuessLabels?: GoogleCloudVisionV1p2beta1WebDetectionWebLabel[];
    /**
     * Fully matching images from the Internet. Can include resized copies of the query image.
     */
    fullMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Web pages containing the matching images from the Internet.
     */
    pagesWithMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebPage[];
    /**
     * Partial matching images from the Internet. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * The visually similar image results.
     */
    visuallySimilarImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Deduced entities from similar images on the Internet.
     */
    webEntities?: GoogleCloudVisionV1p2beta1WebDetectionWebEntity[];
}
