import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScoresResetMultipleForAllRequest extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`.
     */
    kind?: string;
    /**
     * The IDs of leaderboards to reset.
     */
    leaderboardIds?: string[];
}
