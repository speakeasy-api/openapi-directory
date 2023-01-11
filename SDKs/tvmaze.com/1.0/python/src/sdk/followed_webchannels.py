import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FollowedWebchannels:
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

    
    def delete_user_follows_webchannels_webchannel_id_(self, request: operations.DeleteUserFollowsWebchannelsWebchannelIDRequest) -> operations.DeleteUserFollowsWebchannelsWebchannelIDResponse:
        r"""Unfollow a webchannel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/webchannels/{webchannel_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserFollowsWebchannelsWebchannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_follows_webchannels(self, request: operations.GetUserFollowsWebchannelsRequest) -> operations.GetUserFollowsWebchannelsResponse:
        r"""List the followed webchannels
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/follows/webchannels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsWebchannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.WebchannelFollow]])
                res.webchannel_follows = out

        return res

    
    def get_user_follows_webchannels_webchannel_id_(self, request: operations.GetUserFollowsWebchannelsWebchannelIDRequest) -> operations.GetUserFollowsWebchannelsWebchannelIDResponse:
        r"""Check if a webchannel is followed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/webchannels/{webchannel_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsWebchannelsWebchannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebchannelFollow])
                res.webchannel_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_follows_webchannels_webchannel_id_(self, request: operations.PutUserFollowsWebchannelsWebchannelIDRequest) -> operations.PutUserFollowsWebchannelsWebchannelIDResponse:
        r"""Follow a webchannel
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/webchannels/{webchannel_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserFollowsWebchannelsWebchannelIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebchannelFollow])
                res.webchannel_follow = out
        elif r.status_code == 404:
            pass

        return res

    