import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Execution related settings, like retry and service_account.
 */
export declare class GoogleCloudDataplexV1TaskExecutionSpec extends SpeakeasyBase {
    /**
     * Optional. The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${task_id} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument.
     */
    args?: Record<string, string>;
    /**
     * Optional. The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{location_id}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.
     */
    kmsKey?: string;
    /**
     * Optional. The maximum duration after which the job execution is expired.
     */
    maxJobExecutionLifetime?: string;
    /**
     * Optional. The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.
     */
    project?: string;
    /**
     * Required. Service account to use to execute a task. If not provided, the default Compute service account for the project is used.
     */
    serviceAccount?: string;
}
