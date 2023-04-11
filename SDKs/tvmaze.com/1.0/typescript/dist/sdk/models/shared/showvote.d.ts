import { SpeakeasyBase } from "../../../internal/utils";
export declare class ShowVoteInput extends SpeakeasyBase {
    /**
     * The vote number
     */
    vote?: number;
}
/**
 * The show vote
 */
export declare class ShowVote extends SpeakeasyBase {
    showId?: number;
    /**
     * The vote number
     */
    vote?: number;
    /**
     * Epoch timestamp for when the user voted for the episode
     */
    votedAt?: number;
}
