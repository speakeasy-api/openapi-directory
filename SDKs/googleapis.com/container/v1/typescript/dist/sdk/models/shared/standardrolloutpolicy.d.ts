import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Standard rollout policy is the default policy for blue-green.
 */
export declare class StandardRolloutPolicy extends SpeakeasyBase {
    /**
     * Number of blue nodes to drain in a batch.
     */
    batchNodeCount?: number;
    /**
     * Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
     */
    batchPercentage?: number;
    /**
     * Soak time after each batch gets drained. Default to zero.
     */
    batchSoakDuration?: string;
}
