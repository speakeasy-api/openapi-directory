import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to submit a score to leaderboards.
 */
export declare class ScoreSubmission extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#scoreSubmission`.
     */
    kind?: string;
    /**
     * The leaderboard this score is being submitted to.
     */
    leaderboardId?: string;
    /**
     * The new score being submitted.
     */
    score?: string;
    /**
     * Additional information about this score. Values will contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    scoreTag?: string;
    /**
     * Signature Values will contain URI-safe characters as defined by section 2.3 of RFC 3986.
     */
    signature?: string;
}
