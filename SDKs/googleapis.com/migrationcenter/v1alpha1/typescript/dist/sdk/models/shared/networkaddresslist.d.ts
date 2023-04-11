import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAddress } from "./networkaddress";
/**
 * List of allocated/assigned network addresses.
 */
export declare class NetworkAddressList extends SpeakeasyBase {
    /**
     * Network address entries.
     */
    addresses?: NetworkAddress[];
}
