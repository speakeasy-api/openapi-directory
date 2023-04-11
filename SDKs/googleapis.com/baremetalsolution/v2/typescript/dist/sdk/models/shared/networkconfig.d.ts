import { SpeakeasyBase } from "../../../internal/utils";
import { IntakeVlanAttachment } from "./intakevlanattachment";
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
 * The type of this network, either Client or Private.
 */
export declare enum NetworkConfigTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Client = "CLIENT",
    Private = "PRIVATE"
}
/**
 * Configuration parameters for a new network.
 */
export declare class NetworkConfigInput extends SpeakeasyBase {
    /**
     * Interconnect bandwidth. Set only when type is CLIENT.
     */
    bandwidth?: NetworkConfigBandwidthEnum;
    /**
     * CIDR range of the network.
     */
    cidr?: string;
    /**
     * The GCP service of the network. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.
     */
    gcpService?: string;
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string;
    /**
     * The JumboFramesEnabled option for customer to set.
     */
    jumboFramesEnabled?: boolean;
    /**
     * Service CIDR, if any.
     */
    serviceCidr?: NetworkConfigServiceCidrEnum;
    /**
     * The type of this network, either Client or Private.
     */
    type?: NetworkConfigTypeEnum;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team .
     */
    userNote?: string;
    /**
     * List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan).
     */
    vlanAttachments?: IntakeVlanAttachment[];
    /**
     * Whether the VLAN attachment pair is located in the same project.
     */
    vlanSameProject?: boolean;
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
     * The GCP service of the network. Available gcp_service are in https://cloud.google.com/bare-metal/docs/bms-planning.
     */
    gcpService?: string;
    /**
     * A transient unique identifier to identify a volume within an ProvisioningConfig request.
     */
    id?: string;
    /**
     * The JumboFramesEnabled option for customer to set.
     */
    jumboFramesEnabled?: boolean;
    /**
     * Output only. The name of the network config.
     */
    name?: string;
    /**
     * Service CIDR, if any.
     */
    serviceCidr?: NetworkConfigServiceCidrEnum;
    /**
     * The type of this network, either Client or Private.
     */
    type?: NetworkConfigTypeEnum;
    /**
     * User note field, it can be used by customers to add additional information for the BMS Ops team .
     */
    userNote?: string;
    /**
     * List of VLAN attachments. As of now there are always 2 attachments, but it is going to change in the future (multi vlan).
     */
    vlanAttachments?: IntakeVlanAttachment[];
    /**
     * Whether the VLAN attachment pair is located in the same project.
     */
    vlanSameProject?: boolean;
}
