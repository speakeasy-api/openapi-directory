import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1CropHintsParams } from "./googlecloudvisionv1p2beta1crophintsparams";
import { GoogleCloudVisionV1p2beta1LatLongRect } from "./googlecloudvisionv1p2beta1latlongrect";
import { GoogleCloudVisionV1p2beta1ProductSearchParams } from "./googlecloudvisionv1p2beta1productsearchparams";
import { GoogleCloudVisionV1p2beta1TextDetectionParams } from "./googlecloudvisionv1p2beta1textdetectionparams";
import { GoogleCloudVisionV1p2beta1WebDetectionParams } from "./googlecloudvisionv1p2beta1webdetectionparams";
/**
 * Image context and/or feature-specific parameters.
 */
export declare class GoogleCloudVisionV1p2beta1ImageContext extends SpeakeasyBase {
    /**
     * Parameters for crop hints annotation request.
     */
    cropHintsParams?: GoogleCloudVisionV1p2beta1CropHintsParams;
    /**
     * List of languages to use for TEXT_DETECTION. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting `language_hints` is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Text detection returns an error if one or more of the specified languages is not one of the [supported languages](https://cloud.google.com/vision/docs/languages).
     */
    languageHints?: string[];
    /**
     * Rectangle determined by min and max `LatLng` pairs.
     */
    latLongRect?: GoogleCloudVisionV1p2beta1LatLongRect;
    /**
     * Parameters for a product search request.
     */
    productSearchParams?: GoogleCloudVisionV1p2beta1ProductSearchParams;
    /**
     * Parameters for text detections. This is used to control TEXT_DETECTION and DOCUMENT_TEXT_DETECTION features.
     */
    textDetectionParams?: GoogleCloudVisionV1p2beta1TextDetectionParams;
    /**
     * Parameters for web detection request.
     */
    webDetectionParams?: GoogleCloudVisionV1p2beta1WebDetectionParams;
}
