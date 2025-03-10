"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import updatelocationrequest as shared_updatelocationrequest
from ..shared import updatelocationresponse as shared_updatelocationresponse
from typing import Optional


@dataclasses.dataclass
class UpdateLocationSecurity:
    
    oauth2: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class UpdateLocationRequest:
    
    location_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'location_id', 'style': 'simple', 'explode': False }})
    r"""The ID of the location to update."""  
    update_location_request: shared_updatelocationrequest.UpdateLocationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""An object containing the fields to POST for the request.
    
    See the corresponding object definition for field details.
    """  
    

@dataclasses.dataclass
class UpdateLocationResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    update_location_response: Optional[shared_updatelocationresponse.UpdateLocationResponse] = dataclasses.field(default=None)
    r"""Success"""  
    