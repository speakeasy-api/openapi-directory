import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class TaggedShows:
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

    
    def delete_user_tags_tag_id_(self, request: operations.DeleteUserTagsTagIDRequest) -> operations.DeleteUserTagsTagIDResponse:
        r"""Delete a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/tags/{tag_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserTagsTagIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_tags_tag_id_shows_show_id_(self, request: operations.DeleteUserTagsTagIDShowsShowIDRequest) -> operations.DeleteUserTagsTagIDShowsShowIDResponse:
        r"""Untag a show
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/tags/{tag_id}/shows/{show_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserTagsTagIDShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_user_tags(self) -> operations.GetUserTagsResponse:
        r"""List all tags
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/tags"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Tag]])
                res.tags = out

        return res

    
    def get_user_tags_tag_id_shows(self, request: operations.GetUserTagsTagIDShowsRequest) -> operations.GetUserTagsTagIDShowsResponse:
        r"""List all shows under this tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/tags/{tag_id}/shows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserTagsTagIDShowsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.TagInstance]])
                res.tag_instances = out
        elif r.status_code == 404:
            pass

        return res

    
    def patch_user_tags_tag_id_(self, request: operations.PatchUserTagsTagIDRequest) -> operations.PatchUserTagsTagIDResponse:
        r"""Update a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/tags/{tag_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchUserTagsTagIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def post_user_tags(self, request: operations.PostUserTagsRequest) -> operations.PostUserTagsResponse:
        r"""Create a new tag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/tags"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUserTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
        elif r.status_code == 422:
            pass

        return res

    
    def put_user_tags_tag_id_shows_show_id_(self, request: operations.PutUserTagsTagIDShowsShowIDRequest) -> operations.PutUserTagsTagIDShowsShowIDResponse:
        r"""Tag a show
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/tags/{tag_id}/shows/{show_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUserTagsTagIDShowsShowIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagInstance])
                res.tag_instance = out
        elif r.status_code == 404:
            pass

        return res

    