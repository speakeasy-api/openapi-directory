import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class FollowedPeople:
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

    
    def delete_user_follows_people_person_id_(self, request: operations.DeleteUserFollowsPeoplePersonIDRequest) -> operations.DeleteUserFollowsPeoplePersonIDResponse:
        r"""Unfollow a person
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/people/{person_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserFollowsPeoplePersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_follows_people(self, request: operations.GetUserFollowsPeopleRequest) -> operations.GetUserFollowsPeopleResponse:
        r"""List the followed people
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/follows/people"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsPeopleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PersonFollow]])
                res.person_follows = out

        return res

    
    def get_user_follows_people_person_id_(self, request: operations.GetUserFollowsPeoplePersonIDRequest) -> operations.GetUserFollowsPeoplePersonIDResponse:
        r"""Check if a person is followed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/people/{person_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserFollowsPeoplePersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonFollow])
                res.person_follow = out
        elif r.status_code == 404:
            pass

        return res

    
    def put_user_follows_people_person_id_(self, request: operations.PutUserFollowsPeoplePersonIDRequest) -> operations.PutUserFollowsPeoplePersonIDResponse:
        r"""Follow a person
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/follows/people/{person_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserFollowsPeoplePersonIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PersonFollow])
                res.person_follow = out
        elif r.status_code == 404:
            pass

        return res

    