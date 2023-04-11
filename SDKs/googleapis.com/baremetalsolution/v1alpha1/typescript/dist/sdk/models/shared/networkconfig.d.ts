import { SpeakeasyBase } from "../../../internal/utils";
import { VlanAttachment } from "./vlanattachment";
/**
 * Interconnect bandwidth. Set only when type is CLIENT.
 */
export declare enum NetworkConfigBandwidthEnum {
    BandwidthUnspecified = "BANDWIDTH_UNSPECIFIED",
    Bw1Gbps = "BW_1_GBPS",
    Bw2Gbps = "BW_2_GBPS",
    Bw5Gbps = "BW_5_GBPS",
    Bw10Gbps = "BW_10_GBPS"
}
/**
 * Service CIDR, if any.
 */
export declare enum NetworkConfigServiceCidrEnum {
    ServiceCidrUnspecified = "SERVICE_CIDR_UNSPECIFIED",
    Disabled = "DISABLED",
    High26 = "HIGH_26",
    High27 = "HIGH_27",
    High28 = "HIGH_28"
}
/**
 * The type of this network.
 */
export declare enum NetworkConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}
/**
 * Configuration parameters for a new network.
 */
export declare class NetworkConfig extends SpeakeasyBase {
    /**
     * Interconnect bandwidth. Set only when type is CLIENT.
     */
    bandwidth?: NetworkConfigBandwidthEnum;
    /**
     * CIDR range of the network.
     */
    cidr?: string;
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string;
    /**
     * Location where to deploy the network.
     */
    location?: string;
    /**
     * Service CIDR, if any.
     */
    serviceCidr?: NetworkConfigServiceCidrEnum;
    /**
     * The type of this network.
     */
    type?: NetworkConfigTypeEnum;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team (b/194021617).
     */
    userNote?: string;
    /**
     * List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan).
     */
    vlanAttachments?: VlanAttachment[];
}
