import { SpeakeasyBase } from "../../../internal/utils";
import { VirtualMachineConfig, VirtualMachineConfigInput } from "./virtualmachineconfig";
/**
 * Runtime using Virtual Machine for computing.
 */
export declare class VirtualMachineInput extends SpeakeasyBase {
    /**
     * The config settings for virtual machine.
     */
    virtualMachineConfig?: VirtualMachineConfigInput;
}
/**
 * Runtime using Virtual Machine for computing.
 */
export declare class VirtualMachine extends SpeakeasyBase {
    /**
     * Output only. The unique identifier of the Managed Compute Engine instance.
     */
    instanceId?: string;
    /**
     * Output only. The user-friendly name of the Managed Compute Engine instance.
     */
    instanceName?: string;
    /**
     * The config settings for virtual machine.
     */
    virtualMachineConfig?: VirtualMachineConfig;
}
