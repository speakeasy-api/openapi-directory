import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the feeling associated with the entire text or entities in the text.
 */
export declare class Sentiment extends SpeakeasyBase {
    /**
     * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).
     */
    magnitude?: number;
    /**
     * DEPRECATED FIELD - This field is being deprecated in favor of score. Please refer to our documentation at https://cloud.google.com/natural-language/docs for more information.
     */
    polarity?: number;
    /**
     * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
     */
    score?: number;
}
