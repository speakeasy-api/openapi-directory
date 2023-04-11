import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAdapterList } from "./networkadapterlist";
/**
 * Details of network adapters and settings.
 */
export declare class VirtualMachineNetworkDetails extends SpeakeasyBase {
    /**
     * Default gateway address.
     */
    defaultGw?: string;
    /**
     * List of network adapters.
     */
    networkAdapters?: NetworkAdapterList;
    /**
     * IP address of the machine.
     */
    primaryIpAddress?: string;
    /**
     * MAC address of the machine. This property is used to uniqly identify the machine.
     */
    primaryMacAddress?: string;
    /**
     * Public IP address of the machine.
     */
    publicIpAddress?: string;
}
