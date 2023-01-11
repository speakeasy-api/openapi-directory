import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VotedEpisodes:
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

    
    def delete_user_votes_episodes_episode_id_(self, request: operations.DeleteUserVotesEpisodesEpisodeIDRequest) -> operations.DeleteUserVotesEpisodesEpisodeIDResponse:
        r"""Remove an episode vote
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/votes/episodes/{episode_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserVotesEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_votes_episodes(self) -> operations.GetUserVotesEpisodesResponse:
        r"""List the episodes voted for
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/votes/episodes"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesEpisodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.EpisodeVote]])
                res.episode_votes = out

        return res

    
    def get_user_votes_episodes_episode_id_(self, request: operations.GetUserVotesEpisodesEpisodeIDRequest) -> operations.GetUserVotesEpisodesEpisodeIDResponse:
        r"""Check if an episode is voted for
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/votes/episodes/{episode_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EpisodeVote])
                res.episode_vote = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_votes_episodes_episode_id_(self, request: operations.PutUserVotesEpisodesEpisodeIDRequest) -> operations.PutUserVotesEpisodesEpisodeIDResponse:
        r"""Vote for an episode
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/votes/episodes/{episode_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserVotesEpisodesEpisodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EpisodeVote])
                res.episode_vote = out
        elif r.status_code == 404:
            pass

        return res

    