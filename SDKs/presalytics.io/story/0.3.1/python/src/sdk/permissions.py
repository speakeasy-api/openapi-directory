import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Permissions:
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

    
    def story_id_collaborators_userid_permissiontype_get(self, request: operations.StoryIDCollaboratorsUseridPermissiontypeGetRequest) -> operations.StoryIDCollaboratorsUseridPermissiontypeGetResponse:
        r"""Permissions: Story Authorization for a User
        Check whether user have certain types of permissions.  Use http status codes to understand if permission is granted - 204 = Granted, 403 = Forbidden
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{id}/collaborators/authorize/{story_collaborator_userid}/{permissiontype}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryIDCollaboratorsUseridPermissiontypeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    
    def story_permission_types_get(self) -> operations.StoryPermissionTypesGetResponse:
        r"""Permissions: List Permission Types
        Returns a list of possible user permission types
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/permission_types"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StoryPermissionTypesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PermissionType]])
                res.permission_types = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.problem_detail = out

        return res

    