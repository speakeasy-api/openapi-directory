import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FollowedShows:
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

    
    def delete_user_follows_shows_show_id_(self, request: operations.DeleteUserFollowsShowsShowIDRequest) -> operations.DeleteUserFollowsShowsShowIDResponse:
        r"""Unfollow a show
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/shows/{show_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserFollowsShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_follows_shows(self, request: operations.GetUserFollowsShowsRequest) -> operations.GetUserFollowsShowsResponse:
        r"""List the followed shows
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/follows/shows"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ShowFollow]])
                res.show_follows = out

        return res

    
    def get_user_follows_shows_show_id_(self, request: operations.GetUserFollowsShowsShowIDRequest) -> operations.GetUserFollowsShowsShowIDResponse:
        r"""Check if a show is followed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/shows/{show_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowFollow])
                res.show_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_follows_shows_show_id_(self, request: operations.PutUserFollowsShowsShowIDRequest) -> operations.PutUserFollowsShowsShowIDResponse:
        r"""Follow a show
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/shows/{show_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserFollowsShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ShowFollow])
                res.show_follow = out
        elif r.status_code == 404:
            pass

        return res

    