"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import comment as shared_comment
from ..shared import error as shared_error
from typing import Optional


@dataclasses.dataclass
class GetUsersUserIDCommentsSecurity:
    
    auth_header: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'Authorization' }})  
    client_id: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query', 'field_name': 'client_id' }})  
    

@dataclasses.dataclass
class GetUsersUserIDCommentsRequest:
    
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    r"""SoundCloud User id"""  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    r"""Number of results to return in the collection."""  
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    r"""Offset of first result. Deprecated, use `linked_partitioning` instead."""  
    

@dataclasses.dataclass
class GetUsersUserIDCommentsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    comments_list: Optional[list[shared_comment.Comment]] = dataclasses.field(default=None)
    r"""Success"""  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""Unauthorized"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    