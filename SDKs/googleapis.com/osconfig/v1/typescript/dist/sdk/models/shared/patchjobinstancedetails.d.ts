import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Current state of instance patch.
 */
export declare enum PatchJobInstanceDetailsStateEnum {
    PatchStateUnspecified = "PATCH_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Inactive = "INACTIVE",
    Notified = "NOTIFIED",
    Started = "STARTED",
    DownloadingPatches = "DOWNLOADING_PATCHES",
    ApplyingPatches = "APPLYING_PATCHES",
    Rebooting = "REBOOTING",
    Succeeded = "SUCCEEDED",
    SucceededRebootRequired = "SUCCEEDED_REBOOT_REQUIRED",
    Failed = "FAILED",
    Acked = "ACKED",
    TimedOut = "TIMED_OUT",
    RunningPrePatchStep = "RUNNING_PRE_PATCH_STEP",
    RunningPostPatchStep = "RUNNING_POST_PATCH_STEP",
    NoAgentDetected = "NO_AGENT_DETECTED"
}
/**
 * Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details).
 */
export declare class PatchJobInstanceDetails extends SpeakeasyBase {
    /**
     * The number of times the agent that the agent attempts to apply the patch.
     */
    attemptCount?: string;
    /**
     * If the patch fails, this field provides the reason.
     */
    failureReason?: string;
    /**
     * The unique identifier for the instance. This identifier is defined by the server.
     */
    instanceSystemId?: string;
    /**
     * The instance name in the form `projects/* /zones/* /instances/*`
     */
    name?: string;
    /**
     * Current state of instance patch.
     */
    state?: PatchJobInstanceDetailsStateEnum;
}
