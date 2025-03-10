"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import systemtimezoneviewmodel as shared_systemtimezoneviewmodel
from typing import Optional


@dataclasses.dataclass
class GetSetupV1ResourcesTimezonesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    system_timezone_view_model: Optional[shared_systemtimezoneviewmodel.SystemTimezoneViewModel] = dataclasses.field(default=None)
    r"""Success"""  
    