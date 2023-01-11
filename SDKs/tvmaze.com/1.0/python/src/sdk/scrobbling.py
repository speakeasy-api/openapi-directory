import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Scrobbling:
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

    
    def get_scrobble_shows_show_id_(self, request: operations.GetScrobbleShowsShowIDRequest) -> operations.GetScrobbleShowsShowIDResponse:
        r"""List watched and acquired episodes for a show
        This endpoint can be used by all users, even without premium
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scrobble/shows/{show_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetScrobbleShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.MarkedEpisode]])
                res.marked_episodes = out

        return res

    
    def post_scrobble_episodes(self, request: operations.PostScrobbleEpisodesRequest) -> operations.PostScrobbleEpisodesResponse:
        r"""Mark episodes as acquired or watched based on their IDs
        This endpoint can be used by all users, even without premium
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scrobble/episodes"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScrobbleEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.bulk_response = out
        elif r.status_code == 207:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.bulk_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.bulk_response = out

        return res

    
    def post_scrobble_shows(self, request: operations.PostScrobbleShowsRequest) -> operations.PostScrobbleShowsResponse:
        r"""Mark episodes within a show as acquired or watched based on their attributes
        To specify a show, supply either `tvmaze_id`, `thetvdb_id` or `imdb_id`. To specify an episode, supply either both `season` and `episode`, or `airdate`.
        
        This endpoint can be used by all users, even without premium.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/scrobble/shows"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostScrobbleShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.bulk_response = out
        elif r.status_code == 207:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.bulk_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.bulk_response = out

        return res

    
    def put_scrobble_episodes_episode_id_(self, request: operations.PutScrobbleEpisodesEpisodeIDRequest) -> operations.PutScrobbleEpisodesEpisodeIDResponse:
        r"""Mark an episode as acquired or watched based on its ID
        This endpoint can be used by all users, even without premium
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scrobble/episodes/{episode_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutScrobbleEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MarkedEpisode])
                res.marked_episode = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass

        return res

    