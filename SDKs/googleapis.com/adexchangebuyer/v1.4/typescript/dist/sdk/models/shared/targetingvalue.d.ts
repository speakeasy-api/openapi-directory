import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingValueCreativeSize } from "./targetingvaluecreativesize";
import { TargetingValueDayPartTargeting } from "./targetingvaluedayparttargeting";
import { TargetingValueDemogAgeCriteria } from "./targetingvaluedemogagecriteria";
import { TargetingValueDemogGenderCriteria } from "./targetingvaluedemoggendercriteria";
import { TargetingValueRequestPlatformTargeting } from "./targetingvaluerequestplatformtargeting";
export declare class TargetingValue extends SpeakeasyBase {
    /**
     * Next Id: 7
     */
    creativeSizeValue?: TargetingValueCreativeSize;
    dayPartTargetingValue?: TargetingValueDayPartTargeting;
    demogAgeCriteriaValue?: TargetingValueDemogAgeCriteria;
    demogGenderCriteriaValue?: TargetingValueDemogGenderCriteria;
    /**
     * The long value to exclude/include.
     */
    longValue?: string;
    requestPlatformTargetingValue?: TargetingValueRequestPlatformTargeting;
    /**
     * The string value to exclude/include.
     */
    stringValue?: string;
}
