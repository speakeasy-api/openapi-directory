import { SpeakeasyBase } from "../../../internal/utils";
import { Network } from "./network";
/**
 * Network with all used IP addresses.
 */
export declare class NetworkUsage extends SpeakeasyBase {
    /**
     * A Network.
     */
    network?: Network;
    /**
     * All used IP addresses in this network.
     */
    usedIps?: string[];
}
