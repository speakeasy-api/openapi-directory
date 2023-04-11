import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How do you want to sort the episodes of this podcast?
 *
 * @remarks
 *
 */
export declare enum GetPodcastByIdSortEnum {
    RecentFirst = "recent_first",
    OldestFirst = "oldest_first"
}
export declare class GetPodcastByIdRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Podcast id. You can get podcast id from using other endpoints, e.g., `GET /search`, `GET /best_podcasts`...
     */
    id: string;
    /**
     * For episodes pagination. It's the value of **next_episode_pub_date** from the response of last request. If not specified, just return latest 10 episodes or oldest 10 episodes, depending on the value of the **sort** parameter.
     *
     * @remarks
     *
     */
    nextEpisodePubDate?: number;
    /**
     * How do you want to sort the episodes of this podcast?
     *
     * @remarks
     *
     */
    sort?: GetPodcastByIdSortEnum;
}
export declare class GetPodcastByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    podcastFull?: shared.PodcastFull;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
