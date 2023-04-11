import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { BoundingBox } from "./boundingbox";
/**
 * Array of probabilities for the prediction.
 */
export declare class OCRResult extends SpeakeasyBase {
    /**
     * Contains additional attributes related to the task parameter. If the task parameter is table, the row and column IDs for the detected text are returned. If the task parameter is contact, the detected entity tags will be returned.
     */
    attributes?: Attributes;
    boundingBox?: BoundingBox;
    /**
     * Content of the detected text.
     */
    label?: string;
    /**
     * Probability value for the input. Values are between 0�1.
     */
    probability?: number;
}
