"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import enterprise_gist_overview as shared_enterprise_gist_overview
from typing import Optional


@dataclasses.dataclass
class EnterpriseAdminGetGistStatsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    enterprise_gist_overview: Optional[shared_enterprise_gist_overview.EnterpriseGistOverview] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    