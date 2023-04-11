import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAddressList } from "./networkaddresslist";
/**
 * Details of network adapter.
 */
export declare class NetworkAdapterDetails extends SpeakeasyBase {
    /**
     * Network adapter type (e.g. VMXNET3).
     */
    adapterType?: string;
    /**
     * List of allocated/assigned network addresses.
     */
    addresses?: NetworkAddressList;
    /**
     * MAC address.
     */
    macAddress?: string;
}
