"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import apiperiodusageout as shared_apiperiodusageout
from typing import Optional


@dataclasses.dataclass
class APIUsageResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_period_usage_out: Optional[shared_apiperiodusageout.APIPeriodUsageOut] = dataclasses.field(default=None)
    r"""Print current API usage."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    