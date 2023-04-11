import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAttemptResult } from "./instanceattemptresult";
/**
 * Instance represents the status of an instance of a Job.
 */
export declare class InstanceStatus extends SpeakeasyBase {
    /**
     * Optional. Represents time when the instance was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string;
    /**
     * Optional. The number of times this instance exited with code > 0; +optional
     */
    failed?: number;
    /**
     * Required. Index of the instance, unique per Job, and beginning at 0.
     */
    index?: number;
    /**
     * Result of an instance attempt.
     */
    lastAttemptResult?: InstanceAttemptResult;
    /**
     * Optional. Last exit code seen for this instance. +optional
     */
    lastExitCode?: number;
    /**
     * Optional. The number of times this instance was restarted. Instances are restarted according the restartPolicy configured in the Job template. +optional
     */
    restarted?: number;
    /**
     * Optional. Represents time when the instance was created by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    startTime?: string;
    /**
     * Optional. The number of times this instance exited with code == 0. +optional
     */
    succeeded?: number;
}
