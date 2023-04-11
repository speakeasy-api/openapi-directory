import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The feature type.
 */
export declare enum GoogleCloudVisionV1p2beta1FeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    FaceDetection = "FACE_DETECTION",
    LandmarkDetection = "LANDMARK_DETECTION",
    LogoDetection = "LOGO_DETECTION",
    LabelDetection = "LABEL_DETECTION",
    TextDetection = "TEXT_DETECTION",
    DocumentTextDetection = "DOCUMENT_TEXT_DETECTION",
    SafeSearchDetection = "SAFE_SEARCH_DETECTION",
    ImageProperties = "IMAGE_PROPERTIES",
    CropHints = "CROP_HINTS",
    WebDetection = "WEB_DETECTION",
    ProductSearch = "PRODUCT_SEARCH",
    ObjectLocalization = "OBJECT_LOCALIZATION"
}
/**
 * The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
 */
export declare class GoogleCloudVisionV1p2beta1Feature extends SpeakeasyBase {
    /**
     * Maximum number of results of this type. Does not apply to `TEXT_DETECTION`, `DOCUMENT_TEXT_DETECTION`, or `CROP_HINTS`.
     */
    maxResults?: number;
    /**
     * Model to use for the feature. Supported values: "builtin/stable" (the default if unset) and "builtin/latest". `DOCUMENT_TEXT_DETECTION` and `TEXT_DETECTION` also support "builtin/weekly" for the bleeding edge release updated weekly.
     */
    model?: string;
    /**
     * The feature type.
     */
    type?: GoogleCloudVisionV1p2beta1FeatureTypeEnum;
}
