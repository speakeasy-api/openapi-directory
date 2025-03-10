"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Any, Optional


@dataclasses.dataclass
class CreditRelayCreateResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    credit_relay_create_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""OK"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    