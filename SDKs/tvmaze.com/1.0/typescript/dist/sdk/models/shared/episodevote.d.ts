import { SpeakeasyBase } from "../../../internal/utils";
export declare class EpisodeVoteInput extends SpeakeasyBase {
    /**
     * The vote number
     */
    vote?: number;
}
/**
 * The episode vote
 */
export declare class EpisodeVote extends SpeakeasyBase {
    episodeId?: number;
    /**
     * The vote number
     */
    vote?: number;
    /**
     * Epoch timestamp for when the user voted for the episode
     */
    votedAt?: number;
}
