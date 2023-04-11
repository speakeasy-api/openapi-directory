import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
import { VlanAttachment } from "./vlanattachment";
/**
 * Vlan attachment type.
 */
export declare enum CloudInterconnectWorkloadInterconnectTypeEnum {
    InterconnectTypeUnspecified = "INTERCONNECT_TYPE_UNSPECIFIED",
    InterconnectTypeDedicated = "INTERCONNECT_TYPE_DEDICATED",
    InterconnectTypePartner = "INTERCONNECT_TYPE_PARTNER"
}
/**
 * Interconnect circuit link type.
 */
export declare enum CloudInterconnectWorkloadLinkTypeEnum {
    LinkTypeUnspecified = "LINK_TYPE_UNSPECIFIED",
    LinkTypeEthernet10GLr = "LINK_TYPE_ETHERNET_10G_LR",
    LinkTypeEthernet100GLr = "LINK_TYPE_ETHERNET_100G_LR"
}
/**
 * Specifies usage for Cloud Interconnect resources.
 */
export declare class CloudInterconnectWorkload extends SpeakeasyBase {
    /**
     * VLAN attachment used for interconnect.
     */
    interconnectAttachments?: VlanAttachment[];
    /**
     * Vlan attachment type.
     */
    interconnectType?: CloudInterconnectWorkloadInterconnectTypeEnum;
    /**
     * Interconnect circuit link type.
     */
    linkType?: CloudInterconnectWorkloadLinkTypeEnum;
    /**
     * An amount of usage over a time frame.
     */
    provisionedLinkCount?: Usage;
}
