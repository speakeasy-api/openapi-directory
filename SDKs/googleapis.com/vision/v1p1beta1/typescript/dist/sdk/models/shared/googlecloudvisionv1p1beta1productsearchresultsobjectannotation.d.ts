import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Prediction for what the object in the bounding box is.
 */
export declare class GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation extends SpeakeasyBase {
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
