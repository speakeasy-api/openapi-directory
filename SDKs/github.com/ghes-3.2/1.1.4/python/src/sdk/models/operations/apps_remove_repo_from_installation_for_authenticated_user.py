"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from typing import Optional


@dataclasses.dataclass
class AppsRemoveRepoFromInstallationForAuthenticatedUserRequest:
    
    installation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the installation."""  
    repository_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the repository."""  
    

@dataclasses.dataclass
class AppsRemoveRepoFromInstallationForAuthenticatedUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Forbidden"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    