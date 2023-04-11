import { SpeakeasyBase } from "../../../internal/utils";
import { PreservedStatePreservedDisk } from "./preservedstatepreserveddisk";
import { PreservedStatePreservedNetworkIp } from "./preservedstatepreservednetworkip";
/**
 * Preserved state for a given instance.
 */
export declare class PreservedState extends SpeakeasyBase {
    /**
     * Preserved disks defined for this instance. This map is keyed with the device names of the disks.
     */
    disks?: Record<string, PreservedStatePreservedDisk>;
    /**
     * Preserved external IPs defined for this instance. This map is keyed with the name of the network interface.
     */
    externalIPs?: Record<string, PreservedStatePreservedNetworkIp>;
    /**
     * Preserved internal IPs defined for this instance. This map is keyed with the name of the network interface.
     */
    internalIPs?: Record<string, PreservedStatePreservedNetworkIp>;
    /**
     * Preserved metadata defined for this instance.
     */
    metadata?: Record<string, string>;
}
