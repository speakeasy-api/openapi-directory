"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import locationviewmodel as shared_locationviewmodel
from typing import Optional


@dataclasses.dataclass
class DeleteSetupV1LocationsIDRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""id of business location, defaults to primary business location"""  
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    