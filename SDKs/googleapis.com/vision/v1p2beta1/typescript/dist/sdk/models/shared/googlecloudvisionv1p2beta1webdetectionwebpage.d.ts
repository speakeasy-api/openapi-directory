import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1WebDetectionWebImage } from "./googlecloudvisionv1p2beta1webdetectionwebimage";
/**
 * Metadata for web pages.
 */
export declare class GoogleCloudVisionV1p2beta1WebDetectionWebPage extends SpeakeasyBase {
    /**
     * Fully matching images on the page. Can include resized copies of the query image.
     */
    fullMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * Title for the web page, may contain HTML markups.
     */
    pageTitle?: string;
    /**
     * Partial matching images on the page. Those images are similar enough to share some key-point features. For example an original image will likely have partial matching for its crops.
     */
    partialMatchingImages?: GoogleCloudVisionV1p2beta1WebDetectionWebImage[];
    /**
     * (Deprecated) Overall relevancy score for the web page.
     */
    score?: number;
    /**
     * The result web page URL.
     */
    url?: string;
}
