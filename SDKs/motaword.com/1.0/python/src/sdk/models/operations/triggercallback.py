"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import callbackresult as shared_callbackresult
from ..shared import error as shared_error
from enum import Enum
from typing import Optional

class TriggerCallbackActionTypeEnum(str, Enum):
    r"""Callback type"""
    TRANSLATED = 'translated'
    PROOFREAD = 'proofread'
    COMPLETED = 'completed'


@dataclasses.dataclass
class TriggerCallbackRequest:
    
    action_type: TriggerCallbackActionTypeEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'actionType', 'style': 'simple', 'explode': False }})
    r"""Callback type"""  
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Project ID"""  
    

@dataclasses.dataclass
class TriggerCallbackResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    callback_result: Optional[shared_callbackresult.CallbackResult] = dataclasses.field(default=None)
    r"""Callback result"""  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""ProjectNotFound"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    