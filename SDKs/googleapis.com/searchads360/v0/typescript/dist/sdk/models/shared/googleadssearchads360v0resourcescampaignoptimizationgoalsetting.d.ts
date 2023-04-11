import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSettingOptimizationGoalTypesEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    CallClicks = "CALL_CLICKS",
    DrivingDirections = "DRIVING_DIRECTIONS",
    AppPreRegistration = "APP_PRE_REGISTRATION"
}
/**
 * Optimization goal setting for this campaign, which includes a set of optimization goal types.
 */
export declare class GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSetting extends SpeakeasyBase {
    /**
     * The list of optimization goal types.
     */
    optimizationGoalTypes?: GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSettingOptimizationGoalTypesEnum[];
}
