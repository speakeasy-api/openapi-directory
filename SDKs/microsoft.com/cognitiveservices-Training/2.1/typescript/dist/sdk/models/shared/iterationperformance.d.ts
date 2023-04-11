import { SpeakeasyBase } from "../../../internal/utils";
import { TagPerformance } from "./tagperformance";
/**
 * Represents the detailed performance data for a trained iteration
 */
export declare class IterationPerformance extends SpeakeasyBase {
    /**
     * Gets the average precision when applicable
     */
    averagePrecision?: number;
    /**
     * Gets the per-tag performance details for this iteration
     */
    perTagPerformance?: TagPerformance[];
    /**
     * Gets the precision
     */
    precision?: number;
    /**
     * Gets the standard deviation for the precision
     */
    precisionStdDeviation?: number;
    /**
     * Gets the recall
     */
    recall?: number;
    /**
     * Gets the standard deviation for the recall
     */
    recallStdDeviation?: number;
}
