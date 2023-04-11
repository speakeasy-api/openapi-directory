import { SpeakeasyBase } from "../../../internal/utils";
import { PatchConfig } from "./patchconfig";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchJobInstanceDetailsSummary } from "./patchjobinstancedetailssummary";
import { PatchRollout } from "./patchrollout";
/**
 * The current state of the PatchJob.
 */
export declare enum PatchJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Started = "STARTED",
    InstanceLookup = "INSTANCE_LOOKUP",
    Patching = "PATCHING",
    Succeeded = "SUCCEEDED",
    CompletedWithErrors = "COMPLETED_WITH_ERRORS",
    Canceled = "CANCELED",
    TimedOut = "TIMED_OUT"
}
/**
 * A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job).
 */
export declare class PatchJob extends SpeakeasyBase {
    /**
     * Time this patch job was created.
     */
    createTime?: string;
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * Display name for this patch job. This is not a unique identifier.
     */
    displayName?: string;
    /**
     * If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance.
     */
    dryRun?: boolean;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string;
    /**
     * If this patch job failed, this message provides information about the failure.
     */
    errorMessage?: string;
    /**
     * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
     */
    instanceDetailsSummary?: PatchJobInstanceDetailsSummary;
    /**
     * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
     */
    instanceFilter?: PatchInstanceFilter;
    /**
     * Unique identifier for this patch job in the form `projects/* /patchJobs/*`
     */
    name?: string;
    /**
     * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
     */
    patchConfig?: PatchConfig;
    /**
     * Output only. Name of the patch deployment that created this patch job.
     */
    patchDeployment?: string;
    /**
     * Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete.
     */
    percentComplete?: number;
    /**
     * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
     */
    rollout?: PatchRollout;
    /**
     * The current state of the PatchJob.
     */
    state?: PatchJobStateEnum;
    /**
     * Last time this patch job was updated.
     */
    updateTime?: string;
}
