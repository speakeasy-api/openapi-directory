import { SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
export declare class InstancesSetMachineResourcesRequest extends SpeakeasyBase {
    /**
     * A list of the type and count of accelerator cards attached to the instance.
     */
    guestAccelerators?: AcceleratorConfig[];
}
