import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkAddress } from "./networkaddress";
/**
 * Configuration parameters for a new instance.
 */
export declare class InstanceConfig extends SpeakeasyBase {
    /**
     * A network.
     */
    clientNetwork?: NetworkAddress;
    /**
     * Whether the instance should be provisioned with Hyperthreading enabled.
     */
    hyperthreading?: boolean;
    /**
     * A transient unique identifier to idenfity an instance within an ProvisioningConfig request.
     */
    id?: string;
    /**
     * Instance type.
     */
    instanceType?: string;
    /**
     * Location where to deploy the instance.
     */
    location?: string;
    /**
     * OS image to initialize the instance.
     */
    osImage?: string;
    /**
     * A network.
     */
    privateNetwork?: NetworkAddress;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617).
     */
    userNote?: string;
}
