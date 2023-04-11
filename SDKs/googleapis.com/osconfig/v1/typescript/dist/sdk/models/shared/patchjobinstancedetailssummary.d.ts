import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance.
 */
export declare class PatchJobInstanceDetailsSummary extends SpeakeasyBase {
    /**
     * Number of instances that have acked and will start shortly.
     */
    ackedInstanceCount?: string;
    /**
     * Number of instances that are applying patches.
     */
    applyingPatchesInstanceCount?: string;
    /**
     * Number of instances that are downloading patches.
     */
    downloadingPatchesInstanceCount?: string;
    /**
     * Number of instances that failed.
     */
    failedInstanceCount?: string;
    /**
     * Number of instances that are inactive.
     */
    inactiveInstanceCount?: string;
    /**
     * Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service.
     */
    noAgentDetectedInstanceCount?: string;
    /**
     * Number of instances notified about patch job.
     */
    notifiedInstanceCount?: string;
    /**
     * Number of instances pending patch job.
     */
    pendingInstanceCount?: string;
    /**
     * Number of instances that are running the post-patch step.
     */
    postPatchStepInstanceCount?: string;
    /**
     * Number of instances that are running the pre-patch step.
     */
    prePatchStepInstanceCount?: string;
    /**
     * Number of instances rebooting.
     */
    rebootingInstanceCount?: string;
    /**
     * Number of instances that have started.
     */
    startedInstanceCount?: string;
    /**
     * Number of instances that have completed successfully.
     */
    succeededInstanceCount?: string;
    /**
     * Number of instances that require reboot.
     */
    succeededRebootRequiredInstanceCount?: string;
    /**
     * Number of instances that exceeded the time out while applying the patch.
     */
    timedOutInstanceCount?: string;
}
