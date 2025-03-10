"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import apierror as shared_apierror
from ..shared import unmuteresponse as shared_unmuteresponse
from typing import Optional


@dataclasses.dataclass
class UnmuteUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    r"""Bad request"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    unmute_response: Optional[shared_unmuteresponse.UnmuteResponse] = dataclasses.field(default=None)
    r"""Successful response"""  
    