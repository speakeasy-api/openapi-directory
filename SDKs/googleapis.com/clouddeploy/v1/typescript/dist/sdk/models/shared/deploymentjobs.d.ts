import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
/**
 * Deployment job composition.
 */
export declare class DeploymentJobs extends SpeakeasyBase {
    /**
     * Job represents an operation for a `Rollout`.
     */
    deployJob?: Job;
    /**
     * Job represents an operation for a `Rollout`.
     */
    verifyJob?: Job;
}
