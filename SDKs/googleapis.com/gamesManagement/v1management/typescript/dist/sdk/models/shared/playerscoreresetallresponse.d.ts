import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerScoreResetResponse } from "./playerscoreresetresponse";
/**
 * A list of leaderboard reset resources.
 */
export declare class PlayerScoreResetAllResponse extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetAllResponse`.
     */
    kind?: string;
    /**
     * The leaderboard reset results.
     */
    results?: PlayerScoreResetResponse[];
}
