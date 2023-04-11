import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web".
 */
export declare class PatchInstanceFilterGroupLabel extends SpeakeasyBase {
    /**
     * Compute Engine instance labels that must be present for a VM instance to be targeted by this filter.
     */
    labels?: Record<string, string>;
}
