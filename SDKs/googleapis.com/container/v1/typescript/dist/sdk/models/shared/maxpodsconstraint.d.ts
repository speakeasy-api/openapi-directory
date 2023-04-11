import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Constraints applied to pods.
 */
export declare class MaxPodsConstraint extends SpeakeasyBase {
    /**
     * Constraint enforced on the max num of pods per node.
     */
    maxPodsPerNode?: string;
}
