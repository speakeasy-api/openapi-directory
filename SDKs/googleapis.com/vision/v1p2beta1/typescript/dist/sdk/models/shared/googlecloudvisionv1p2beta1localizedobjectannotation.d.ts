import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
/**
 * Set of detected objects with bounding boxes.
 */
export declare class GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation extends SpeakeasyBase {
    /**
     * A bounding polygon for the detected image annotation.
     */
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    /**
     * The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
     */
    languageCode?: string;
    /**
     * Object ID that should align with EntityAnnotation mid.
     */
    mid?: string;
    /**
     * Object name, expressed in its `language_code` language.
     */
    name?: string;
    /**
     * Score of the result. Range [0, 1].
     */
    score?: number;
}
