import { SpeakeasyBase } from "../../../internal/utils";
import { CombinedAudienceTargetingSetting } from "./combinedaudiencetargetingsetting";
/**
 * Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
 */
export declare class CombinedAudienceGroup extends SpeakeasyBase {
    /**
     * Required. All combined audience targeting settings in combined audience group. Repeated settings with same id will be ignored. The number of combined audience settings should be no more than five, error will be thrown otherwise.
     */
    settings?: CombinedAudienceTargetingSetting[];
}
