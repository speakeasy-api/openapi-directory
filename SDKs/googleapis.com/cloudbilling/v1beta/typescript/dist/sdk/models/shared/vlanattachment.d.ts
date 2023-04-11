import { SpeakeasyBase } from "../../../internal/utils";
import { Usage } from "./usage";
/**
 * Capacities in the [pricing table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing) Examples of capacity are: 50/100/200/300/400/500-Mbps, 1/2/5/10/20/50-Gbps.
 */
export declare enum VlanAttachmentBandwidthEnum {
    BandwidthUnspecified = "BANDWIDTH_UNSPECIFIED",
    BandwidthBps50M = "BANDWIDTH_BPS_50M",
    BandwidthBps100M = "BANDWIDTH_BPS_100M",
    BandwidthBps200M = "BANDWIDTH_BPS_200M",
    BandwidthBps300M = "BANDWIDTH_BPS_300M",
    BandwidthBps400M = "BANDWIDTH_BPS_400M",
    BandwidthBps500M = "BANDWIDTH_BPS_500M",
    BandwidthBps1G = "BANDWIDTH_BPS_1G",
    BandwidthBps2G = "BANDWIDTH_BPS_2G",
    BandwidthBps5G = "BANDWIDTH_BPS_5G",
    BandwidthBps10G = "BANDWIDTH_BPS_10G",
    BandwidthBps20G = "BANDWIDTH_BPS_20G",
    BandwidthBps50G = "BANDWIDTH_BPS_50G"
}
/**
 * VLAN attachment for cloud interconnect.
 */
export declare class VlanAttachment extends SpeakeasyBase {
    /**
     * Capacities in the [pricing table](https://cloud.google.com/vpc/network-pricing#interconnect-pricing) Examples of capacity are: 50/100/200/300/400/500-Mbps, 1/2/5/10/20/50-Gbps.
     */
    bandwidth?: VlanAttachmentBandwidthEnum;
    /**
     * An amount of usage over a time frame.
     */
    vlanCount?: Usage;
}
