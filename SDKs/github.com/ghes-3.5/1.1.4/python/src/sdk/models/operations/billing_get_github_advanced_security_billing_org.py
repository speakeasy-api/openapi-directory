"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import advanced_security_active_committers as shared_advanced_security_active_committers
from ..shared import basic_error as shared_basic_error
from typing import Optional


@dataclasses.dataclass
class BillingGetGithubAdvancedSecurityBillingOrgRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    r"""The organization name. The name is not case sensitive."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results per page (max 100)."""  
    

@dataclasses.dataclass
class BillingGetGithubAdvancedSecurityBillingOrgResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    advanced_security_active_committers: Optional[shared_advanced_security_active_committers.AdvancedSecurityActiveCommitters] = dataclasses.field(default=None)
    r"""Success"""  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Response if GitHub Advanced Security is not enabled for this repository"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    