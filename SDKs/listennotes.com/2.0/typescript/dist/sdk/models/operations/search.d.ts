import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **type** is *episode* or *podcast*.
 *
 * @remarks
 *
 */
export declare enum SearchSafeModeEnum {
    Zero = "0",
    One = "1"
}
/**
 * Sort by date or not? If 0, then sort by relevance. If 1, then sort by date.
 *
 * @remarks
 *
 */
export declare enum SearchSortByDateEnum {
    Zero = "0",
    One = "1"
}
/**
 * What type of contents do you want to search for?
 *
 * @remarks
 *
 */
export declare enum SearchTypeEnum {
    Episode = "episode",
    Podcast = "podcast",
    Curated = "curated"
}
/**
 * Whether or not to keep only one episode per podcast in search results. 1 is yes and 0 is no. It works only when **type** is *episode*.
 *
 * @remarks
 *
 */
export declare enum SearchUniquePodcastsEnum {
    Zero = "0",
    One = "1"
}
export declare class SearchRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * Maximum number of episodes. Applicable only when type parameter is **podcast**.
     *
     * @remarks
     *
     */
    episodeCountMax?: number;
    /**
     * Minimum number of episodes. Applicable only when type parameter is **podcast**.
     *
     * @remarks
     *
     */
    episodeCountMin?: number;
    /**
     * A comma-delimited string of a list of genre ids. If not specified, then all genres are included. You can find the id and the name of all genres from `GET /genres`. It works only when **type** is *episode* or *podcast*.
     *
     * @remarks
     *
     */
    genreIds?: string;
    /**
     * Limit search results to a specific language. If not specified, it'll be any language. You can get a list of supported languages from `GET /languages`. It works only when **type** is *episode* or *podcast*.
     *
     * @remarks
     *
     */
    language?: string;
    /**
     * Maximum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**.
     *
     * @remarks
     * If **type** parameter is **episode**, it's for audio length of an episode.
     * If **type** parameter is **podcast**, it's for average audio length of all episodes in a podcast.
     *
     */
    lenMax?: number;
    /**
     * Minimum audio length in minutes. Applicable only when **type** parameter is **episode** or **podcast**.
     *
     * @remarks
     * If **type** parameter is **episode**, it's for audio length of an episode.
     * If **type** parameter is **podcast**, it's for average audio length of all episodes in a podcast.
     *
     */
    lenMin?: number;
    /**
     * A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to exclude search results of a few specific podcasts. It works only when **type** is *episode*.
     *
     * @remarks
     *
     */
    ncid?: string;
    /**
     * A comma-delimited string of podcast ids (up to 5 podcasts) - you can get a podcast id from the **podcast_id** field in response. This parameter is to limit search results from only a few specific podcasts. It works only when **type** is *episode*.
     *
     * @remarks
     *
     */
    ocid?: string;
    /**
     * Offset for search results, for pagination. You'll use **next_offset** from response for this parameter.
     *
     * @remarks
     *
     */
    offset?: number;
    /**
     * A comma-delimited string to search only in specific fields. Allowed values are title, description, author, and audio. If not specified, then search every fields.
     *
     * @remarks
     *
     */
    onlyIn?: string;
    /**
     * Only show episodes/podcasts/curated lists published after this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.
     *
     * @remarks
     *
     */
    publishedAfter?: number;
    /**
     * Only show episodes/podcasts/curated lists published before this timestamp (in milliseconds). If **published_before** & **published_after** are used at the same time, **published_before** should be bigger than **published_after**.
     *
     * @remarks
     *
     */
    publishedBefore?: number;
    /**
     * Search term, e.g., person, place, topic... You can use double quotes to do verbatim match, e.g., "game of thrones". Otherwise, it's fuzzy search.
     *
     * @remarks
     *
     */
    q: string;
    /**
     * Limit search results to a specific region (e.g., us, gb, in...). If not specified, it'll be any region. You can get the supported country codes from `GET /regions`. It works only when **type** is *episode* or *podcast*.
     *
     * @remarks
     *
     */
    region?: string;
    /**
     * Whether or not to exclude podcasts/episodes with explicit language. 1 is yes and 0 is no. It works only when **type** is *episode* or *podcast*.
     *
     * @remarks
     *
     */
    safeMode?: SearchSafeModeEnum;
    /**
     * Sort by date or not? If 0, then sort by relevance. If 1, then sort by date.
     *
     * @remarks
     *
     */
    sortByDate?: SearchSortByDateEnum;
    /**
     * What type of contents do you want to search for?
     *
     * @remarks
     *
     */
    type?: SearchTypeEnum;
    /**
     * Whether or not to keep only one episode per podcast in search results. 1 is yes and 0 is no. It works only when **type** is *episode*.
     *
     * @remarks
     *
     */
    uniquePodcasts?: SearchUniquePodcastsEnum;
    /**
     * Maximum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.
     *
     * @remarks
     *
     */
    updateFreqMax?: number;
    /**
     * Minimum update frequency in hours (how frequently does a podcast release a new episode). For example, if you want to find "weekly" podcasts, then you can set **update_freq_min**=144 hours (or 6 days) and **update_freq_max**=192 hours (or 8 days). Applicable only when type parameter is **podcast**.
     *
     * @remarks
     *
     */
    updateFreqMin?: number;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    searchResponse?: shared.SearchResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
