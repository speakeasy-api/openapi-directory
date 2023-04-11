import { SpeakeasyBase } from "../../../internal/utils";
import { PatchConfig } from "./patchconfig";
import { PatchInstanceFilter } from "./patchinstancefilter";
import { PatchRollout } from "./patchrollout";
/**
 * A request message to initiate patching across Compute Engine instances.
 */
export declare class ExecutePatchJobRequest extends SpeakeasyBase {
    /**
     * Description of the patch job. Length of the description is limited to 1024 characters.
     */
    description?: string;
    /**
     * Display name for this patch job. This does not have to be unique.
     */
    displayName?: string;
    /**
     * If this patch is a dry-run only, instances are contacted but will do nothing.
     */
    dryRun?: boolean;
    /**
     * Duration of the patch job. After the duration ends, the patch job times out.
     */
    duration?: string;
    /**
     * A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones.
     */
    instanceFilter?: PatchInstanceFilter;
    /**
     * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
     */
    patchConfig?: PatchConfig;
    /**
     * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
     */
    rollout?: PatchRollout;
}
