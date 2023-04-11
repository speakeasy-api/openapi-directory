import { SpeakeasyBase } from "../../../internal/utils";
import { AllocationPolicy } from "./allocationpolicy";
import { JobNotification } from "./jobnotification";
import { JobStatus } from "./jobstatus";
import { LogsPolicy } from "./logspolicy";
import { TaskGroup, TaskGroupInput } from "./taskgroup";
/**
 * The Cloud Batch Job description.
 */
export declare class Job extends SpeakeasyBase {
    /**
     * A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
     */
    allocationPolicy?: AllocationPolicy;
    /**
     * Output only. When the Job was created.
     */
    createTime?: string;
    /**
     * Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.
     */
    labels?: Record<string, string>;
    /**
     * LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
     */
    logsPolicy?: LogsPolicy;
    /**
     * Output only. Job name. For example: "projects/123456/locations/us-central1/jobs/job01".
     */
    name?: string;
    /**
     * Notification configurations.
     */
    notifications?: JobNotification[];
    /**
     * Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied.
     */
    priority?: string;
    /**
     * Job status.
     */
    status?: JobStatus;
    /**
     * Required. TaskGroups in the Job. Only one TaskGroup is supported now.
     */
    taskGroups?: TaskGroup[];
    /**
     * Output only. A system generated unique ID (in UUID4 format) for the Job.
     */
    uid?: string;
    /**
     * Output only. The last time the Job was updated.
     */
    updateTime?: string;
}
/**
 * The Cloud Batch Job description.
 */
export declare class JobInput extends SpeakeasyBase {
    /**
     * A Job's resource allocation policy describes when, where, and how compute resources should be allocated for the Job.
     */
    allocationPolicy?: AllocationPolicy;
    /**
     * Labels for the Job. Labels could be user provided or system generated. For example, "labels": { "department": "finance", "environment": "test" } You can assign up to 64 labels. [Google Compute Engine label restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) apply. Label names that start with "goog-" or "google-" are reserved.
     */
    labels?: Record<string, string>;
    /**
     * LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
     */
    logsPolicy?: LogsPolicy;
    /**
     * Notification configurations.
     */
    notifications?: JobNotification[];
    /**
     * Priority of the Job. The valid value range is [0, 100). Default value is 0. Higher value indicates higher priority. A job with higher priority value is more likely to run earlier if all other requirements are satisfied.
     */
    priority?: string;
    /**
     * Job status.
     */
    status?: JobStatus;
    /**
     * Required. TaskGroups in the Job. Only one TaskGroup is supported now.
     */
    taskGroups?: TaskGroupInput[];
}
