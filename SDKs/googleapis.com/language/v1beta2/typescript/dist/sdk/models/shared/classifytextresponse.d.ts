import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationCategory } from "./classificationcategory";
/**
 * The document classification response message.
 */
export declare class ClassifyTextResponse extends SpeakeasyBase {
    /**
     * Categories representing the input document.
     */
    categories?: ClassificationCategory[];
}
