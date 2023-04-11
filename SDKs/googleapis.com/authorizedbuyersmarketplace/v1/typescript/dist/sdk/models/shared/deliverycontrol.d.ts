import { SpeakeasyBase } from "../../../internal/utils";
import { FrequencyCap } from "./frequencycap";
/**
 * Output only. Specifies roadblocking in a main companion lineitem.
 */
export declare enum DeliveryControlCompanionDeliveryTypeEnum {
    CompanionDeliveryTypeUnspecified = "COMPANION_DELIVERY_TYPE_UNSPECIFIED",
    DeliveryOptional = "DELIVERY_OPTIONAL",
    DeliveryAtLeastOne = "DELIVERY_AT_LEAST_ONE",
    DeliveryAll = "DELIVERY_ALL"
}
/**
 * Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available.
 */
export declare enum DeliveryControlCreativeRotationTypeEnum {
    CreativeRotationTypeUnspecified = "CREATIVE_ROTATION_TYPE_UNSPECIFIED",
    RotationEven = "ROTATION_EVEN",
    RotationOptimized = "ROTATION_OPTIMIZED",
    RotationManual = "ROTATION_MANUAL",
    RotationSequential = "ROTATION_SEQUENTIAL"
}
/**
 * Output only. Specifies how the impression delivery will be paced.
 */
export declare enum DeliveryControlDeliveryRateTypeEnum {
    DeliveryRateTypeUnspecified = "DELIVERY_RATE_TYPE_UNSPECIFIED",
    Evenly = "EVENLY",
    FrontLoaded = "FRONT_LOADED",
    AsFastAsPossible = "AS_FAST_AS_POSSIBLE"
}
/**
 * Output only. Specifies the roadblocking type in display creatives.
 */
export declare enum DeliveryControlRoadblockingTypeEnum {
    RoadblockingTypeUnspecified = "ROADBLOCKING_TYPE_UNSPECIFIED",
    OnlyOne = "ONLY_ONE",
    OneOrMore = "ONE_OR_MORE",
    AsManyAsPossible = "AS_MANY_AS_POSSIBLE",
    AllRoadblock = "ALL_ROADBLOCK",
    CreativeSet = "CREATIVE_SET"
}
/**
 * Message contains details about how the deal will be paced.
 */
export declare class DeliveryControl extends SpeakeasyBase {
    /**
     * Output only. Specifies roadblocking in a main companion lineitem.
     */
    companionDeliveryType?: DeliveryControlCompanionDeliveryTypeEnum;
    /**
     * Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available.
     */
    creativeRotationType?: DeliveryControlCreativeRotationTypeEnum;
    /**
     * Output only. Specifies how the impression delivery will be paced.
     */
    deliveryRateType?: DeliveryControlDeliveryRateTypeEnum;
    /**
     * Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest.
     */
    frequencyCap?: FrequencyCap[];
    /**
     * Output only. Specifies the roadblocking type in display creatives.
     */
    roadblockingType?: DeliveryControlRoadblockingTypeEnum;
}
