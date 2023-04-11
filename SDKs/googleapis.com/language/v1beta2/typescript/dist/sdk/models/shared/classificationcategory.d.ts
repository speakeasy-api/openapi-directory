import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a category returned from the text classifier.
 */
export declare class ClassificationCategory extends SpeakeasyBase {
    /**
     * The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text.
     */
    confidence?: number;
    /**
     * The name of the category representing the document, from the [predefined taxonomy](https://cloud.google.com/natural-language/docs/categories).
     */
    name?: string;
}
