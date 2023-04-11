import { SpeakeasyBase } from "../../../internal/utils";
/**
 * label
 */
export declare class LabelResult extends SpeakeasyBase {
    /**
     * Probability lable for the input.
     */
    label?: string;
    /**
     * Probability value for the input. Values are between 0�1.
     */
    probability?: number;
}
