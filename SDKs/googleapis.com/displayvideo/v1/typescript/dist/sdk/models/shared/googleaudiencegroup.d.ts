import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAudienceTargetingSetting } from "./googleaudiencetargetingsetting";
/**
 * Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
 */
export declare class GoogleAudienceGroup extends SpeakeasyBase {
    /**
     * Required. All Google audience targeting settings in Google audience group. Repeated settings with same id will be ignored.
     */
    settings?: GoogleAudienceTargetingSetting[];
}
