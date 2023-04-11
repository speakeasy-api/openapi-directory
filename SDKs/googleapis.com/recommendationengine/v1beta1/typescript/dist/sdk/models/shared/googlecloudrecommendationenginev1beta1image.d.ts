import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Catalog item thumbnail/detail image.
 */
export declare class GoogleCloudRecommendationengineV1beta1Image extends SpeakeasyBase {
    /**
     * Optional. Height of the image in number of pixels.
     */
    height?: number;
    /**
     * Required. URL of the image with a length limit of 5 KiB.
     */
    uri?: string;
    /**
     * Optional. Width of the image in number of pixels.
     */
    width?: number;
}
