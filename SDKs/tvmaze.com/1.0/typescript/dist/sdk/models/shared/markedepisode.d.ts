import { SpeakeasyBase } from "../../../internal/utils";
export declare class MarkedEpisodeEmbedded extends SpeakeasyBase {
    episode?: Record<string, any>;
}
export declare class MarkedEpisodeInput extends SpeakeasyBase {
    embedded?: MarkedEpisodeEmbedded;
    /**
     * Epoch timestamp for when the user watched the episode, or 0 for unknown.
     */
    markedAt?: number;
    /**
     * 0 for watched, 1 for acquired, 2 for skipped
     */
    type?: any;
}
/**
 * this episode is now marked
 */
export declare class MarkedEpisode extends SpeakeasyBase {
    embedded?: MarkedEpisodeEmbedded;
    episodeId?: number;
    /**
     * Epoch timestamp for when the user watched the episode, or 0 for unknown.
     */
    markedAt?: number;
    /**
     * 0 for watched, 1 for acquired, 2 for skipped
     */
    type?: any;
}
