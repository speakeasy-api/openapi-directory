import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of a set of guest accelerators attached to a machine.
 */
export declare class GuestAccelerator extends SpeakeasyBase {
    /**
     * The number of the guest accelerator cards exposed to each instance.
     */
    acceleratorCount?: string;
    /**
     * The type of the guest accelerator cards. For example: "nvidia-tesla-t4".
     */
    acceleratorType?: string;
}
