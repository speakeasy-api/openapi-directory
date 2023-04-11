import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum {
    Default = "DEFAULT",
    Tier1 = "TIER_1"
}
export declare enum NetworkPerformanceConfigTotalEgressBandwidthTierEnum {
    Default = "DEFAULT",
    Tier1 = "TIER_1"
}
export declare class NetworkPerformanceConfig extends SpeakeasyBase {
    externalIpEgressBandwidthTier?: NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
    totalEgressBandwidthTier?: NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
}
