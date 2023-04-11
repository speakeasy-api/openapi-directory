import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Default network tier to be set.
 */
export declare enum ProjectsSetDefaultNetworkTierRequestNetworkTierEnum {
    FixedStandard = "FIXED_STANDARD",
    Premium = "PREMIUM",
    Select = "SELECT",
    Standard = "STANDARD",
    StandardOverridesFixedStandard = "STANDARD_OVERRIDES_FIXED_STANDARD"
}
export declare class ProjectsSetDefaultNetworkTierRequest extends SpeakeasyBase {
    /**
     * Default network tier to be set.
     */
    networkTier?: ProjectsSetDefaultNetworkTierRequestNetworkTierEnum;
}
