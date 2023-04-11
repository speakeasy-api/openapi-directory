import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RouterAppliance represents a Router appliance which is specified by a VM URI and a NIC address.
 */
export declare class RouterApplianceInstance extends SpeakeasyBase {
    /**
     * The IP address of the network interface to use for peering.
     */
    ipAddress?: string;
    networkInterface?: string;
    /**
     * The URI of the virtual machine resource
     */
    virtualMachine?: string;
}
