import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeResource } from "./computeresource";
import { Environment } from "./environment";
import { LifecyclePolicy } from "./lifecyclepolicy";
import { Runnable } from "./runnable";
import { Volume } from "./volume";
/**
 * Spec of a task
 */
export declare class TaskSpec extends SpeakeasyBase {
    /**
     * Compute resource requirements
     */
    computeResource?: ComputeResource;
    /**
     * An Environment describes a collection of environment variables to set when executing Tasks.
     */
    environment?: Environment;
    /**
     * Deprecated: please use environment(non-plural) instead.
     */
    environments?: Record<string, string>;
    /**
     * Lifecycle management schema when any task in a task group is failed. Currently we only support one lifecycle policy. When the lifecycle policy condition is met, the action in the policy will execute. If task execution result does not meet with the defined lifecycle policy, we consider it as the default policy. Default policy means if the exit code is 0, exit task. If task ends with non-zero exit code, retry the task with max_retry_count.
     */
    lifecyclePolicies?: LifecyclePolicy[];
    /**
     * Maximum number of retries on failures. The default, 0, which means never retry. The valid value range is [0, 10].
     */
    maxRetryCount?: number;
    /**
     * Maximum duration the task should run. The task will be killed and marked as FAILED if over this limit.
     */
    maxRunDuration?: string;
    /**
     * The sequence of scripts or containers to run for this Task. Each Task using this TaskSpec executes its list of runnables in order. The Task succeeds if all of its runnables either exit with a zero status or any that exit with a non-zero status have the ignore_exit_status flag. Background runnables are killed automatically (if they have not already exited) a short time after all foreground runnables have completed. Even though this is likely to result in a non-zero exit status for the background runnable, these automatic kills are not treated as Task failures.
     */
    runnables?: Runnable[];
    /**
     * Volumes to mount before running Tasks using this TaskSpec.
     */
    volumes?: Volume[];
}
