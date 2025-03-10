"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import access_enum as shared_access_enum
from ..shared import error as shared_error
from typing import Any, Optional


@dataclasses.dataclass
class GetUsersUserIDPlaylistsSecurity:
    
    auth_header: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'Authorization' }})  
    client_id: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query', 'field_name': 'client_id' }})  
    

@dataclasses.dataclass
class GetUsersUserIDPlaylistsRequest:
    
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    r"""SoundCloud User id"""  
    access: Optional[list[shared_access_enum.AccessEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'access', 'style': 'form', 'explode': False }})
    r"""Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details."""  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    r"""Number of results to return in the collection."""  
    linked_partitioning: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'linked_partitioning', 'style': 'form', 'explode': True }})
    r"""Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"""  
    

@dataclasses.dataclass
class GetUsersUserIDPlaylistsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""Unauthorized"""  
    get_users_user_id_playlists_200_application_json_one_of: Optional[Any] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    