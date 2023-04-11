import { SpeakeasyBase } from "../../../internal/utils";
import { OneTimeSchedule } from "./onetimeschedule";
import { PatchConfig } from "./patchconfig";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchRollout } from "./patchrollout";
import { RecurringSchedule, RecurringScheduleInput } from "./recurringschedule";
/**
 * Output only. Current state of the patch deployment.
 */
export declare enum PatchDeploymentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Paused = "PAUSED"
}
/**
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
 */
export declare class PatchDeployment extends SpeakeasyBase {
    /**
     * Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string;
    /**
     * Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * Optional. Duration of the patch. After the duration ends, the patch times out.
     */
    duration?: string;
    /**
     * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
     */
    instanceFilter?: PatchInstanceFilter;
    /**
     * Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    lastExecuteTime?: string;
    /**
     * Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
     */
    name?: string;
    /**
     * Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    oneTimeSchedule?: OneTimeSchedule;
    /**
     * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
     */
    patchConfig?: PatchConfig;
    /**
     * Sets the time for recurring patch deployments.
     */
    recurringSchedule?: RecurringSchedule;
    /**
     * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
     */
    rollout?: PatchRollout;
    /**
     * Output only. Current state of the patch deployment.
     */
    state?: PatchDeploymentStateEnum;
    /**
     * Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    updateTime?: string;
}
/**
 * Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
 */
export declare class PatchDeploymentInput extends SpeakeasyBase {
    /**
     * Optional. Description of the patch deployment. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * Optional. Duration of the patch. After the duration ends, the patch times out.
     */
    duration?: string;
    /**
     * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
     */
    instanceFilter?: PatchInstanceFilter;
    /**
     * Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
     */
    name?: string;
    /**
     * Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    oneTimeSchedule?: OneTimeSchedule;
    /**
     * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
     */
    patchConfig?: PatchConfig;
    /**
     * Sets the time for recurring patch deployments.
     */
    recurringSchedule?: RecurringScheduleInput;
    /**
     * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
     */
    rollout?: PatchRollout;
}
