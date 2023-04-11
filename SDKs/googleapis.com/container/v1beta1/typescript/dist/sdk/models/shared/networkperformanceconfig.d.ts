import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses.
 */
export declare enum NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Tier1 = "TIER_1"
}
/**
 * Specifies the total network bandwidth tier for the NodePool.
 */
export declare enum NetworkPerformanceConfigTotalEgressBandwidthTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Tier1 = "TIER_1"
}
/**
 * Configuration of all network bandwidth tiers
 */
export declare class NetworkPerformanceConfig extends SpeakeasyBase {
    /**
     * Specifies the network bandwidth tier for the NodePool for traffic to external/public IP addresses.
     */
    externalIpEgressBandwidthTier?: NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
    /**
     * Specifies the total network bandwidth tier for the NodePool.
     */
    totalEgressBandwidthTier?: NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
}
