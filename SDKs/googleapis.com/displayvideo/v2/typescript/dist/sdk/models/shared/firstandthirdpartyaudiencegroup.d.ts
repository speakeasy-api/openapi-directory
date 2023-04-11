import { SpeakeasyBase } from "../../../internal/utils";
import { FirstAndThirdPartyAudienceTargetingSetting } from "./firstandthirdpartyaudiencetargetingsetting";
/**
 * Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
 */
export declare class FirstAndThirdPartyAudienceGroup extends SpeakeasyBase {
    /**
     * Required. All first and third party audience targeting settings in first and third party audience group. Repeated settings with same id are not allowed.
     */
    settings?: FirstAndThirdPartyAudienceTargetingSetting[];
}
