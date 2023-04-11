import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementUpdateResponse } from "./achievementupdateresponse";
/**
 * Response message for UpdateMultipleAchievements rpc.
 */
export declare class AchievementUpdateMultipleResponse extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#achievementUpdateMultipleResponse`.
     */
    kind?: string;
    /**
     * The updated state of the achievements.
     */
    updatedAchievements?: AchievementUpdateResponse[];
}
