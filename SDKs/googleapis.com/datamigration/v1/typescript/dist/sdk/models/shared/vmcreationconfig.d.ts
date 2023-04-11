import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VM creation configuration message
 */
export declare class VmCreationConfig extends SpeakeasyBase {
    /**
     * The subnet name the vm needs to be created in.
     */
    subnet?: string;
    /**
     * Required. VM instance machine type to create.
     */
    vmMachineType?: string;
    /**
     * The Google Cloud Platform zone to create the VM in.
     */
    vmZone?: string;
}
