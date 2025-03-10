"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import error as shared_error
from ..shared import filter as shared_filter
from enum import Enum
from typing import Optional


@dataclasses.dataclass
class PostAPIV1FiltersSecurity:
    
    bearer_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer', 'field_name': 'Authorization' }})  
    
class PostAPIV1FiltersRequestBodyContextEnum(str, Enum):
    HOME = 'home'
    NOTIFICATIONS = 'notifications'
    PUBLIC = 'public'
    THREAD = 'thread'


@dataclasses.dataclass
class PostAPIV1FiltersRequestBody:
    
    context: list[PostAPIV1FiltersRequestBodyContextEnum] = dataclasses.field()
    r"""Array of enumerable strings `home`, `notifications`, `public`, `thread`. At least one context must be specified."""  
    phrase: str = dataclasses.field()
    r"""Text to be filtered."""  
    expires_in: Optional[int] = dataclasses.field(default=None)
    r"""Number of seconds from now the filter should expire. Otherwise, null for a filter that doesn't expire."""  
    irreversible: Optional[bool] = dataclasses.field(default=None)
    r"""Should the server irreversibly drop matching entities from home and notifications?"""  
    whole_word: Optional[bool] = dataclasses.field(default=None)
    r"""Consider word boundaries?"""  
    

@dataclasses.dataclass
class PostAPIV1FiltersResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""Invalid or missing Authorization header"""  
    filter: Optional[shared_filter.Filter] = dataclasses.field(default=None)
    r"""The newly-created filter will be returned."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    