import { SpeakeasyBase } from "../../../internal/utils";
export declare class AchievementResetMultipleForAllRequest extends SpeakeasyBase {
    /**
     * The IDs of achievements to reset.
     */
    achievementIds?: string[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`.
     */
    kind?: string;
}
