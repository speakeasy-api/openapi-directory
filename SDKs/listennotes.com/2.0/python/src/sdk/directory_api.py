import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DirectoryAPI:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_best_podcasts(self, request: operations.GetBestPodcastsRequest) -> operations.GetBestPodcastsResponse:
        r"""Fetch a list of best podcasts by genre
        Get a list of curated best podcasts by genre,
        which are curated by Listen Notes staffs based on various signals from the Internet, e.g.,
        top charts on other podcast platforms, recommendations from mainstream media,
        user activities on listennotes.com...
        You can get the genre ids from `GET /genres` endpoint.
        This endpoint returns same data as https://www.listennotes.com/best-podcasts/
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/best_podcasts"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBestPodcastsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BestPodcastsResponse])
                res.best_podcasts_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_curated_podcast_by_id(self, request: operations.GetCuratedPodcastByIDRequest) -> operations.GetCuratedPodcastByIDResponse:
        r"""Fetch a curated list of podcasts by id
        Get detailed meta data of all podcasts in a specific curated list.
        This endpoint returns same data as https://www.listennotes.com/curated-podcasts/
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/curated_podcasts/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCuratedPodcastByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CuratedListFull])
                res.curated_list_full = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_curated_podcasts(self, request: operations.GetCuratedPodcastsRequest) -> operations.GetCuratedPodcastsResponse:
        r"""Fetch curated lists of podcasts
        A bunch of curated lists from online media. For each list, you'll get basic info of up to 5 podcasts. To get detailed meta data of all podcasts in a specific list, you need to use `GET /curated_podcasts/{id}`. We add new curated lists to the database on a daily basis.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/curated_podcasts"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCuratedPodcastsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCuratedPodcastsResponse])
                res.get_curated_podcasts_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_episode_by_id(self, request: operations.GetEpisodeByIDRequest) -> operations.GetEpisodeByIDResponse:
        r"""Fetch detailed meta data for an episode by id
        Fetch detailed meta data for a specific episode.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodeByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EpisodeFull])
                res.episode_full = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_episode_recommendations(self, request: operations.GetEpisodeRecommendationsRequest) -> operations.GetEpisodeRecommendationsResponse:
        r"""Fetch recommendations for an episode
        Fetch up to 8 episode recommendations based on the given episode id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/episodes/{id}/recommendations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodeRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetEpisodeRecommendationsResponse])
                res.get_episode_recommendations_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_episodes_in_batch(self, request: operations.GetEpisodesInBatchRequest) -> operations.GetEpisodesInBatchResponse:
        r"""Batch fetch basic meta data for episodes
        Batch fetch basic meta data for up to 10 episodes. This endpoint could be used to implement custom playlists for individual episodes. For detailed meta data of an individual episode, you need to use `GET /episodes/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/episodes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEpisodesInBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetEpisodesInBatchResponse])
                res.get_episodes_in_batch_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_genres(self, request: operations.GetGenresRequest) -> operations.GetGenresResponse:
        r"""Fetch a list of podcast genres
        Get a list of podcast genres that are supported in Listen Notes.
        The genre id can be passed to other endpoints as a parameter to get podcasts in a specific genre,
        e.g., `GET /best_podcasts`, `GET /search`...
        You may want to cache the list of genres on the client side.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/genres"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGenresResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetGenresResponse])
                res.get_genres_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_languages(self, request: operations.GetLanguagesRequest) -> operations.GetLanguagesResponse:
        r"""Fetch a list of supported languages for podcasts
        Get a list of languages that are supported in Listen Notes database. You can use the language string as query parameter in `GET /search`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/languages"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetLanguagesResponse])
                res.get_languages_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_podcast_by_id(self, request: operations.GetPodcastByIDRequest) -> operations.GetPodcastByIDResponse:
        r"""Fetch detailed meta data and episodes for a podcast by id
        Fetch detailed meta data and episodes for a specific podcast (up to 10 episodes each time).
        You can use the **next_episode_pub_date** parameter to do pagination and fetch more episodes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/podcasts/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPodcastByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PodcastFull])
                res.podcast_full = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_podcast_recommendations(self, request: operations.GetPodcastRecommendationsRequest) -> operations.GetPodcastRecommendationsResponse:
        r"""Fetch recommendations for a podcast
        Fetch up to 8 podcast recommendations based on the given podcast id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/podcasts/{id}/recommendations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPodcastRecommendationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPodcastRecommendationsResponse])
                res.get_podcast_recommendations_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_podcasts_in_batch(self, request: operations.GetPodcastsInBatchRequest) -> operations.GetPodcastsInBatchResponse:
        r"""Batch fetch basic meta data for podcasts
        Batch fetch basic meta data for up to 10 podcasts.
        This endpoint could be used to build something like OPML import,
        allowing users to import a bunch of podcasts via rss urls.
        For detailed meta data (including episodes) of an individual podcast, you need to use `GET /podcasts/{id}`. This endpoint is available only in the PRO/ENTERPRISE plan.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/podcasts"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPodcastsInBatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPodcastsInBatchResponse])
                res.get_podcasts_in_batch_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def get_regions(self, request: operations.GetRegionsRequest) -> operations.GetRegionsResponse:
        r"""Fetch a list of supported countries/regions for best podcasts
        It returns a dictionary of country codes (e.g., us, gb...) & country names (United States, United Kingdom...). The country code is used in the query parameter **region** of `GET /best_podcasts`.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regions"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRegionsResponse])
                res.get_regions_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    
    def just_listen(self, request: operations.JustListenRequest) -> operations.JustListenResponse:
        r"""Fetch a random podcast episode
        Recently published episodes are more likely to be fetched. Good luck!
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/just_listen"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.JustListenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EpisodeSimple])
                res.episode_simple = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 429:
            pass
        elif r.status_code >= 500 and r.status_code < 600:
            pass

        return res

    