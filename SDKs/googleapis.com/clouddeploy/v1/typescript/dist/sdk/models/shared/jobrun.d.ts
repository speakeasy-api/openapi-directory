import { SpeakeasyBase } from "../../../internal/utils";
import { AdvanceChildRolloutJobRun } from "./advancechildrolloutjobrun";
import { CreateChildRolloutJobRun } from "./createchildrolloutjobrun";
import { DeployJobRun } from "./deployjobrun";
import { VerifyJobRun } from "./verifyjobrun";
/**
 * Output only. The current state of the `JobRun`.
 */
export declare enum JobRunStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Terminating = "TERMINATING",
    Terminated = "TERMINATED"
}
/**
 * A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
 */
export declare class JobRun extends SpeakeasyBase {
    /**
     * AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`.
     */
    advanceChildRolloutJobRun?: AdvanceChildRolloutJobRun;
    /**
     * CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`.
     */
    createChildRolloutJobRun?: CreateChildRolloutJobRun;
    /**
     * Output only. Time at which the `JobRun` was created.
     */
    createTime?: string;
    /**
     * DeployJobRun contains information specific to a deploy `JobRun`.
     */
    deployJobRun?: DeployJobRun;
    /**
     * Output only. Time at which the `JobRun` ended.
     */
    endTime?: string;
    /**
     * Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Output only. ID of the `Rollout` job this `JobRun` corresponds to.
     */
    jobId?: string;
    /**
     * Optional. Name of the `JobRun`. Format is projects/{project}/locations/{location}/ deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/ {rollouts}/jobRuns/{uuid}.
     */
    name?: string;
    /**
     * Output only. ID of the `Rollout` phase this `JobRun` belongs in.
     */
    phaseId?: string;
    /**
     * Output only. Time at which the `JobRun` was started.
     */
    startTime?: string;
    /**
     * Output only. The current state of the `JobRun`.
     */
    state?: JobRunStateEnum;
    /**
     * Output only. Unique identifier of the `JobRun`.
     */
    uid?: string;
    /**
     * VerifyJobRun contains information specific to a verify `JobRun`.
     */
    verifyJobRun?: VerifyJobRun;
}
