import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NetworkPerformanceConfigTotalEgressBandwidthTierEnum {
    Default = "DEFAULT",
    Tier1 = "TIER_1"
}
export declare class NetworkPerformanceConfig extends SpeakeasyBase {
    totalEgressBandwidthTier?: NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
}
