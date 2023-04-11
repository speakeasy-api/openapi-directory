import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudBaremetalsolutionV2LogicalInterface } from "./googlecloudbaremetalsolutionv2logicalinterface";
import { NetworkAddress } from "./networkaddress";
/**
 * The type of network configuration on the instance.
 */
export declare enum InstanceConfigNetworkConfigEnum {
    NetworkconfigUnspecified = "NETWORKCONFIG_UNSPECIFIED",
    SingleVlan = "SINGLE_VLAN",
    MultiVlan = "MULTI_VLAN"
}
/**
 * Configuration parameters for a new instance.
 */
export declare class InstanceConfigInput extends SpeakeasyBase {
    /**
     * If true networks can be from different projects of the same vendor account.
     */
    accountNetworksEnabled?: boolean;
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
     * Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    instanceType?: string;
    /**
     * List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. Filled if InstanceConfig.multivlan_config is true.
     */
    logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];
    /**
     * The type of network configuration on the instance.
     */
    networkConfig?: InstanceConfigNetworkConfigEnum;
    /**
     * Server network template name. Filled if InstanceConfig.multivlan_config is true.
     */
    networkTemplate?: string;
    /**
     * OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    osImage?: string;
    /**
     * A network.
     */
    privateNetwork?: NetworkAddress;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team .
     */
    userNote?: string;
}
/**
 * Configuration parameters for a new instance.
 */
export declare class InstanceConfig extends SpeakeasyBase {
    /**
     * If true networks can be from different projects of the same vendor account.
     */
    accountNetworksEnabled?: boolean;
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
     * Instance type. [Available types](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    instanceType?: string;
    /**
     * List of logical interfaces for the instance. The number of logical interfaces will be the same as number of hardware bond/nic on the chosen network template. Filled if InstanceConfig.multivlan_config is true.
     */
    logicalInterfaces?: GoogleCloudBaremetalsolutionV2LogicalInterface[];
    /**
     * Output only. The name of the instance config.
     */
    name?: string;
    /**
     * The type of network configuration on the instance.
     */
    networkConfig?: InstanceConfigNetworkConfigEnum;
    /**
     * Server network template name. Filled if InstanceConfig.multivlan_config is true.
     */
    networkTemplate?: string;
    /**
     * OS image to initialize the instance. [Available images](https://cloud.google.com/bare-metal/docs/bms-planning#server_configurations)
     */
    osImage?: string;
    /**
     * A network.
     */
    privateNetwork?: NetworkAddress;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team .
     */
    userNote?: string;
}
