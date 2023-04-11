import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether or not to fetch up to 15 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.
 *
 * @remarks
 *
 */
export declare enum GetPodcastsInBatchFormShowLatestEpisodesEnum {
    Zero = "0",
    One = "1"
}
export declare class GetPodcastsInBatchForm extends SpeakeasyBase {
    /**
     * Comma-separated list of podcast ids.
     */
    ids?: string;
    /**
     * Comma-separated Apple Podcasts (iTunes) ids, e.g., 659155419
     */
    itunesIds?: string;
    /**
     * For latest episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 15 episodes.
     *
     * @remarks
     *
     */
    nextEpisodePubDate?: number;
    /**
     * Comma-separated rss urls.
     */
    rsses?: string;
    /**
     * Whether or not to fetch up to 15 latest episodes from these podcasts, sorted by pub_date. 1 is yes, and 0 is no.
     *
     * @remarks
     *
     */
    showLatestEpisodes?: GetPodcastsInBatchFormShowLatestEpisodesEnum;
    /**
     * Comma-separated Spotify ids, e.g., 3DDfEsKDIDrTlnPOiG4ZF4
     */
    spotifyIds?: string;
}
