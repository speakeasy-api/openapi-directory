"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import authorization as shared_authorization
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody:
    
    scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('scopes'), 'exclude': lambda f: f is None }})
    r"""A list of [scopes](https://docs.github.com/enterprise-server@3.0/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/)."""  
    

@dataclasses.dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenRequest:
    
    request_body: EnterpriseAdminCreateImpersonationOAuthTokenRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class EnterpriseAdminCreateImpersonationOAuthTokenResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    