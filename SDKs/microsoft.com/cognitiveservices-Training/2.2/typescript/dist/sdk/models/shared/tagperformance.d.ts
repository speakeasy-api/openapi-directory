import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents performance data for a particular tag in a trained iteration.
 */
export declare class TagPerformance extends SpeakeasyBase {
    /**
     * Gets the average precision when applicable.
     */
    averagePrecision?: number;
    id?: string;
    name?: string;
    /**
     * Gets the precision.
     */
    precision?: number;
    /**
     * Gets the standard deviation for the precision.
     */
    precisionStdDeviation?: number;
    /**
     * Gets the recall.
     */
    recall?: number;
    /**
     * Gets the standard deviation for the recall.
     */
    recallStdDeviation?: number;
}
