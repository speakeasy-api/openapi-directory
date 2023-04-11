import { SpeakeasyBase } from "../../../internal/utils";
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
     * Specifies the total network bandwidth tier for the NodePool.
     */
    totalEgressBandwidthTier?: NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
}
