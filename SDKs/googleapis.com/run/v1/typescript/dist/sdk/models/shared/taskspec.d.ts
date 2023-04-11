import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Volume } from "./volume";
/**
 * TaskSpec is a description of a task.
 */
export declare class TaskSpec extends SpeakeasyBase {
    /**
     * Optional. List of containers belonging to the task. We disallow a number of fields on this Container. Only a single container may be provided.
     */
    containers?: Container[];
    /**
     * Optional. Number of retries allowed per task, before marking this job failed. Defaults to 3.
     */
    maxRetries?: number;
    /**
     * Optional. Email address of the IAM service account associated with the task of a job execution. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
     */
    serviceAccountName?: string;
    /**
     * Optional. Duration in seconds the task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout. Defaults to 600 seconds.
     */
    timeoutSeconds?: string;
    /**
     * Optional. List of volumes that can be mounted by containers belonging to the task. More info: https://kubernetes.io/docs/concepts/storage/volumes
     */
    volumes?: Volume[];
}
