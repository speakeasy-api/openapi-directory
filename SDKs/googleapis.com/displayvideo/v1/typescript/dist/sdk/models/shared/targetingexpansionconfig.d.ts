import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Magnitude of expansion for applicable targeting under this line item. Beginning **March 25, 2023**, the behavior of this field may change in the following ways with the replacement of targeting expansion with [optimized targeting](//support.google.com/displayvideo/answer/12060859): * This field will represent the optimized targeting checkbox, with a `NO_EXPANSION` value representing optimized targeting turned off and a `LEAST_EXPANSION` value representing optimized targeting turned on. * `NO_EXPANSION` will be the default value for the field and will be automatically assigned if you do not set the field. * If you set the field to any value other than `NO_EXPANSION`, it will automatically be set to `LEAST_EXPANSION`. This behavior will be rolled out to all partners by mid-April 2023.
 */
export declare enum TargetingExpansionConfigTargetingExpansionLevelEnum {
    TargetingExpansionLevelUnspecified = "TARGETING_EXPANSION_LEVEL_UNSPECIFIED",
    NoExpansion = "NO_EXPANSION",
    LeastExpansion = "LEAST_EXPANSION",
    SomeExpansion = "SOME_EXPANSION",
    BalancedExpansion = "BALANCED_EXPANSION",
    MoreExpansion = "MORE_EXPANSION",
    MostExpansion = "MOST_EXPANSION"
}
/**
 * Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning **March 25, 2023**, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by mid-April 2023.
 */
export declare class TargetingExpansionConfig extends SpeakeasyBase {
    /**
     * Required. Whether to exclude first-party audiences from use in targeting expansion or optimized targeting. Similar audiences of the excluded first-party lists will not be excluded. Only applicable when a first-party audience is positively targeted (directly or included in a combined audience), otherwise this selection will be ignored. Beginning **March 25, 2023**, this field may be deprecated with the replacement of targeting expansion with [optimized targeting](//support.google.com/displayvideo/answer/12060859). Upon deprecation, this field will be set to `false`. If this field is set to `true` when deprecated, all positive first-party audience targeting assigned to this line item will be replaced with negative targeting of the same first-party audiences to ensure the continued exclusion of those audiences. This field will be deprecated for all partners by mid-April 2023.
     */
    excludeFirstPartyAudience?: boolean;
    /**
     * Required. Magnitude of expansion for applicable targeting under this line item. Beginning **March 25, 2023**, the behavior of this field may change in the following ways with the replacement of targeting expansion with [optimized targeting](//support.google.com/displayvideo/answer/12060859): * This field will represent the optimized targeting checkbox, with a `NO_EXPANSION` value representing optimized targeting turned off and a `LEAST_EXPANSION` value representing optimized targeting turned on. * `NO_EXPANSION` will be the default value for the field and will be automatically assigned if you do not set the field. * If you set the field to any value other than `NO_EXPANSION`, it will automatically be set to `LEAST_EXPANSION`. This behavior will be rolled out to all partners by mid-April 2023.
     */
    targetingExpansionLevel?: TargetingExpansionConfigTargetingExpansionLevelEnum;
}
