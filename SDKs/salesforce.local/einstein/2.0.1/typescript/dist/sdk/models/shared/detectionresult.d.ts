import { SpeakeasyBase } from "../../../internal/utils";
import { BoundingBox } from "./boundingbox";
/**
 * label
 */
export declare class DetectionResult extends SpeakeasyBase {
    boundingBox?: BoundingBox;
    /**
     * Probability lable for the input.
     */
    label?: string;
    /**
     * Probability value for the input. Values are between 0�1.
     */
    probability?: number;
}
