import { SpeakeasyBase } from "../../../internal/utils";
import { EpisodeSimple } from "./episodesimple";
import { PodcastSimple } from "./podcastsimple";
/**
 * OK
 */
export declare class GetPodcastsInBatchResponse extends SpeakeasyBase {
    /**
     * Up to 10 latest episodes from these podcasts, sorted by **pub_date**. This field shows up only when **show_latest_episodes** is 1.
     *
     * @remarks
     *
     */
    latestEpisodes?: EpisodeSimple[];
    podcasts: PodcastSimple[];
}
