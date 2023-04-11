import { SpeakeasyBase } from "../../../internal/utils";
import { AccessConfig } from "./accessconfig";
/**
 * A Compute Engine NetworkInterface resource. Identical to the NetworkInterface on the corresponding Compute Engine resource.
 */
export declare class NetworkInterface extends SpeakeasyBase {
    /**
     * An array of configurations for this interface. This specifies how this interface is configured to interact with other network services.
     */
    accessConfigs?: AccessConfig[];
    /**
     * Name the Network resource to which this interface applies.
     */
    network?: string;
    /**
     * An optional IPV4 internal network address to assign to the instance for this network interface.
     */
    networkIp?: string;
}
