import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DirectoryApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBestPodcasts - Fetch a list of best podcasts by genre
     *
     * Get a list of curated best podcasts by genre,
     * which are curated by Listen Notes staffs based on various signals from the Internet, e.g.,
     * top charts on other podcast platforms, recommendations from mainstream media,
     * user activities on listennotes.com...
     * You can get the genre ids from `GET /genres` endpoint.
     * This endpoint returns same data as https://www.listennotes.com/best-podcasts/
     *
    **/
    getBestPodcasts(req: operations.GetBestPodcastsRequest, config?: AxiosRequestConfig): Promise<operations.GetBestPodcastsResponse>;
    /**
     * getCuratedPodcastById - Fetch a curated list of podcasts by id
     *
     * Get detailed meta data of all podcasts in a specific curated list.
     * This endpoint returns same data as https://www.listennotes.com/curated-podcasts/
     *
    **/
    getCuratedPodcastById(req: operations.GetCuratedPodcastByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCuratedPodcastByIdResponse>;
    /**
     * getCuratedPodcasts - Fetch curated lists of podcasts
     *
     * A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.
     *
    **/
    getCuratedPodcasts(req: operations.GetCuratedPodcastsRequest, config?: AxiosRequestConfig): Promise<operations.GetCuratedPodcastsResponse>;
    /**
     * getEpisodeById - Fetch detailed meta data for an episode by id
     *
     * Fetch detailed meta data for a specific episode.
    **/
    getEpisodeById(req: operations.GetEpisodeByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodeByIdResponse>;
    /**
     * getEpisodeRecommendations - Fetch recommendations for an episode
     *
     * Fetch up to 8 episode recommendations based on the given episode id.
    **/
    getEpisodeRecommendations(req: operations.GetEpisodeRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodeRecommendationsResponse>;
    /**
     * getEpisodesInBatch - Batch fetch basic meta data for episodes
     *
     * Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
     *
    **/
    getEpisodesInBatch(req: operations.GetEpisodesInBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetEpisodesInBatchResponse>;
    /**
     * getGenres - Fetch a list of podcast genres
     *
     * Get a list of podcast genres that are supported in Listen Notes.
     * The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
     * e.g., `GET /best_podcasts`, `GET /search`...
     * You may want to cache the list of genres on the client side.
     *
    **/
    getGenres(req: operations.GetGenresRequest, config?: AxiosRequestConfig): Promise<operations.GetGenresResponse>;
    /**
     * getLanguages - Fetch a list of supported languages for podcasts
     *
     * Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.
     *
    **/
    getLanguages(req: operations.GetLanguagesRequest, config?: AxiosRequestConfig): Promise<operations.GetLanguagesResponse>;
    /**
     * getPodcastById - Fetch detailed meta data and episodes for a podcast by id
     *
     * Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
     * You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.
     *
    **/
    getPodcastById(req: operations.GetPodcastByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastByIdResponse>;
    /**
     * getPodcastRecommendations - Fetch recommendations for a podcast
     *
     * Fetch up to 8 podcast recommendations based on the given podcast id.
    **/
    getPodcastRecommendations(req: operations.GetPodcastRecommendationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastRecommendationsResponse>;
    /**
     * getPodcastsInBatch - Batch fetch basic meta data for podcasts
     *
     * Batch fetch basic meta data for up to 10 podcasts.
     * This endpoint could be used to build something like OPML import,
     * allowing users to import a bunch of podcasts via rss urls.
     * For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
     *
    **/
    getPodcastsInBatch(req: operations.GetPodcastsInBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetPodcastsInBatchResponse>;
    /**
     * getRegions - Fetch a list of supported countries/regions for best podcasts
     *
     * It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.
     *
    **/
    getRegions(req: operations.GetRegionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionsResponse>;
    /**
     * justListen - Fetch a random podcast episode
     *
     * Recently published episodes are more likely to be fetched. Good luck!
    **/
    justListen(req: operations.JustListenRequest, config?: AxiosRequestConfig): Promise<operations.JustListenResponse>;
}
