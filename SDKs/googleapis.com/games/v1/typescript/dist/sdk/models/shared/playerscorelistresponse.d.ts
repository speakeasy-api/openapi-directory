import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerScoreResponse } from "./playerscoreresponse";
/**
 * A list of score submission statuses.
 */
export declare class PlayerScoreListResponse extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#playerScoreListResponse`.
     */
    kind?: string;
    /**
     * The score submissions statuses.
     */
    submittedScores?: PlayerScoreResponse[];
}
