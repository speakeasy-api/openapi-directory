"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import scim_enterprise_user_response as shared_scim_enterprise_user_response
from ..shared import scim_error as shared_scim_error
from typing import Optional


@dataclasses.dataclass
class EnterpriseAdminProvisionEnterpriseUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    scim_enterprise_user_response: Optional[shared_scim_enterprise_user_response.ScimEnterpriseUserResponse] = dataclasses.field(default=None)
    r"""User has been created"""  
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    r"""Bad request"""  
    