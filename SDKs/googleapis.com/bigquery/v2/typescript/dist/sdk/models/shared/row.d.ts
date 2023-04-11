import { SpeakeasyBase } from "../../../internal/utils";
import { Entry } from "./entry";
/**
 * A single row in the confusion matrix.
 */
export declare class Row extends SpeakeasyBase {
    /**
     * The original label of this row.
     */
    actualLabel?: string;
    /**
     * Info describing predicted label distribution.
     */
    entries?: Entry[];
}
