import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about the label with which the example is associated.
 */
export declare class Label extends SpeakeasyBase {
    /**
     * ID of the dataset that the label belongs to.
     */
    datasetId: number;
    /**
     * ID of the label.
     */
    id?: number;
    /**
     * Name of the label.
     */
    name: string;
    /**
     * Number of examples that have the label.
     */
    numExamples?: number;
}
