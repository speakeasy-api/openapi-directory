"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import account as shared_account
from ..shared import error as shared_error
from typing import Any, Optional


@dataclasses.dataclass
class PatchAPIV1AccountsUpdateCredentialsSecurity:
    
    bearer_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class PatchAPIV1AccountsUpdateCredentialsRequestBodySource:
    
    language: Optional[str] = dataclasses.field(default=None)
    r"""Default language to use for authored statuses. (ISO 6391)"""  
    privacy: Optional[str] = dataclasses.field(default=None)
    r"""Default post privacy for authored statuses."""  
    sensitive: Optional[bool] = dataclasses.field(default=None)
    r"""Whether to mark authored statuses as sensitive by default."""  
    

@dataclasses.dataclass
class PatchAPIV1AccountsUpdateCredentialsRequestBody:
    
    avatar: Optional[str] = dataclasses.field(default=None)
    r"""Avatar image encoded using multipart/form-data"""  
    bot: Optional[bool] = dataclasses.field(default=None)
    r"""Whether the account has a bot flag."""  
    discoverable: Optional[str] = dataclasses.field(default=None)
    r"""Whether the account should be shown in the profile directory."""  
    display_name: Optional[str] = dataclasses.field(default=None)
    r"""The display name to use for the profile."""  
    fields_attributes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Profile metadata `name` and `value`. (By default, max 4 fields and 255 characters per property/value)"""  
    header: Optional[str] = dataclasses.field(default=None)
    r"""Header image encoded using multipart/form-data"""  
    locked: Optional[bool] = dataclasses.field(default=None)
    r"""Whether manual approval of follow requests is required."""  
    note: Optional[str] = dataclasses.field(default=None)
    r"""The account bio."""  
    source: Optional[PatchAPIV1AccountsUpdateCredentialsRequestBodySource] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class PatchAPIV1AccountsUpdateCredentialsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    r"""You should use `accounts/verify_credentials` to first obtain plaintext representations from within the `source` parameter, then allow the user to edit these plaintext representations before submitting them through this API. The server will generate the corresponding HTML."""  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""Unauthorized"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    