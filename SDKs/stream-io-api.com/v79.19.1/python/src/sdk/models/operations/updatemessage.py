"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import apierror as shared_apierror
from ..shared import messageresponse as shared_messageresponse
from ..shared import updatemessagerequest as shared_updatemessagerequest
from typing import Optional


@dataclasses.dataclass
class UpdateMessageRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Automatically added"""  
    update_message_request: shared_updatemessagerequest.UpdateMessageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""Update Message Request"""  
    

@dataclasses.dataclass
class UpdateMessageResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    r"""Bad request"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    message_response: Optional[shared_messageresponse.MessageResponse] = dataclasses.field(default=None)
    r"""Successful response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    