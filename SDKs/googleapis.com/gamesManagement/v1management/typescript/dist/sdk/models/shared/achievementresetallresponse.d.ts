import { SpeakeasyBase } from "../../../internal/utils";
import { AchievementResetResponse } from "./achievementresetresponse";
/**
 * Achievement reset all response.
 */
export declare class AchievementResetAllResponse extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetAllResponse`.
     */
    kind?: string;
    /**
     * The achievement reset results.
     */
    results?: AchievementResetResponse[];
}
