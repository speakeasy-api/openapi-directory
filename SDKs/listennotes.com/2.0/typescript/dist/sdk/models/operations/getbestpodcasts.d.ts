import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * How do you want to sort these podcasts?
 *
 * @remarks
 * If you'd like to sort by popularity, please use **listen_score**.
 *
 */
export declare enum GetBestPodcastsSortEnum {
    RecentAddedFirst = "recent_added_first",
    OldestAddedFirst = "oldest_added_first",
    RecentPublishedFirst = "recent_published_first",
    OldestPublishedFirst = "oldest_published_first",
    ListenScore = "listen_score"
}
export declare class GetBestPodcastsRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * You can get the id from `GET /genres`. If not specified, it'll be the overall best podcasts, which can be considered as a special genre.
     */
    genreId?: string;
    /**
     * Filter best podcasts by language.
     *
     * @remarks
     * You can get a list of supported languages (e.g., English, Chinese, Japanese...) from `GET /languages`.
     * If not specified, you'll get "best podcasts" in any language.
     *
     */
    language?: string;
    /**
     * Page number of those podcasts in this genre.
     */
    page?: number;
    /**
     * Filter best podcasts by the publisher's country/region.
     *
     * @remarks
     * This is to narrow down the results to include "best podcasts" produced in a specific country/region.
     * You can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`.
     * If not specified, you'll get "best podcasts" produced in any country/region.
     * If you want to get a country/region's "best podcasts" that are also produced in that country/region,
     * then you need to specify both **region** and **publisher_region**,
     * e.g., `region=jp` and `publisher_region=jp`.
     *
     */
    publisherRegion?: string;
    /**
     * Filter best podcasts by country/region.
     *
     * @remarks
     * Please note that podcasts that are "best" in a country/region may not be produced in that country/region.
     * For example, a podcast from the US may be very popular in Canada.
     * You can get the supported country codes (e.g., us, jp, gb...) from `GET /regions`.
     * If not specified, you'll get "best podcasts" in United States.
     *
     */
    region?: string;
    /**
     * Whether or not to exclude podcasts with explicit language. 1 is yes, and 0 is no.
     */
    safeMode?: shared.SafeModeParamEnum;
    /**
     * How do you want to sort these podcasts?
     *
     * @remarks
     * If you'd like to sort by popularity, please use **listen_score**.
     *
     */
    sort?: GetBestPodcastsSortEnum;
}
export declare class GetBestPodcastsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    bestPodcastsResponse?: shared.BestPodcastsResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
