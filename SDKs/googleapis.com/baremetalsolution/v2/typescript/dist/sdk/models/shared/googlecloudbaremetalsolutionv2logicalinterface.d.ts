import { SpeakeasyBase } from "../../../internal/utils";
import { LogicalNetworkInterface } from "./logicalnetworkinterface";
/**
 * Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
 */
export declare class GoogleCloudBaremetalsolutionV2LogicalInterface extends SpeakeasyBase {
    /**
     * The index of the logical interface mapping to the index of the hardware bond or nic on the chosen network template. This field is deprecated.
     */
    interfaceIndex?: number;
    /**
     * List of logical network interfaces within a logical interface.
     */
    logicalNetworkInterfaces?: LogicalNetworkInterface[];
    /**
     * Interface name. This is of syntax or and forms part of the network template name.
     */
    name?: string;
}
