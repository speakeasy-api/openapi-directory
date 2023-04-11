import { SpeakeasyBase } from "../../../internal/utils";
import { LabelSummary } from "./labelsummary";
/**
 * Upload initiated
 */
export declare class Dataset extends SpeakeasyBase {
    available?: boolean;
    /**
     * Date and time that the dataset was created.
     */
    createdAt?: Date;
    id: number;
    /**
     * Contains the labels array that contains all the labels for the dataset.
     */
    labelSummary?: LabelSummary;
    /**
     * Dataset language.
     */
    language?: string;
    name: string;
    /**
     * Number of duplicate images. This number includes duplicates in the .zip file from which the dataset was created plus the number of duplicate images from subsequent PUT calls to add images to the dataset.
     */
    numOfDuplicates?: number;
    /**
     * Object returned; in this case, dataset.
     */
    object?: string;
    statusMsg?: string;
    /**
     * Total number of examples in the dataset.
     */
    totalExamples?: number;
    /**
     * Total number of labels in the dataset.
     */
    totalLabels?: number;
    type?: string;
    updatedAt?: Date;
}
