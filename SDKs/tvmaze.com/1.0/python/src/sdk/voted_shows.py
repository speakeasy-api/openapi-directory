import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VotedShows:
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

    
    def delete_user_votes_shows_show_id_(self, request: operations.DeleteUserVotesShowsShowIDRequest) -> operations.DeleteUserVotesShowsShowIDResponse:
        r"""Remove a show vote
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/votes/shows/{show_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserVotesShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_votes_shows(self, request: operations.GetUserVotesShowsRequest) -> operations.GetUserVotesShowsResponse:
        r"""List the shows voted for
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/votes/shows"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ShowVote]])
                res.show_votes = out

        return res

    
    def get_user_votes_shows_show_id_(self, request: operations.GetUserVotesShowsShowIDRequest) -> operations.GetUserVotesShowsShowIDResponse:
        r"""Check if a show is voted for
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/votes/shows/{show_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserVotesShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowVote])
                res.show_vote = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_votes_shows_show_id_(self, request: operations.PutUserVotesShowsShowIDRequest) -> operations.PutUserVotesShowsShowIDResponse:
        r"""Vote for a show
        Set `voted_at` to `NULL` or leave it out to use the current time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/votes/shows/{show_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserVotesShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowVote])
                res.show_vote = out
        elif r.status_code == 404:
            pass

        return res

    