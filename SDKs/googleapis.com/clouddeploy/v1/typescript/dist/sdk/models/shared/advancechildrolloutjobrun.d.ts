import { SpeakeasyBase } from "../../../internal/utils";
/**
 * AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`.
 */
export declare class AdvanceChildRolloutJobRun extends SpeakeasyBase {
    /**
     * Output only. Name of the `ChildRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.
     */
    rollout?: string;
    /**
     * Output only. the ID of the ChildRollout's Phase.
     */
    rolloutPhaseId?: string;
}
