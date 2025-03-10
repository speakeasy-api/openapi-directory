"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import account as shared_account
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GetAccount401ApplicationJSON:
    r"""Access token is missing or invalid"""
    
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('detail'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class GetAccountResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    r"""Account data"""  
    get_account_401_application_json_object: Optional[GetAccount401ApplicationJSON] = dataclasses.field(default=None)
    r"""Access token is missing or invalid"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    