import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`.
 */
export declare class CreateChildRolloutJobRun extends SpeakeasyBase {
    /**
     * Output only. Name of the `ChildRollout`. Format is projects/{project}/ locations/{location}/deliveryPipelines/{deliveryPipeline}/ releases/{release}/rollouts/a-z{0,62}.
     */
    rollout?: string;
    /**
     * Output only. The ID of the childRollout Phase initiated by this JobRun.
     */
    rolloutPhaseId?: string;
}
