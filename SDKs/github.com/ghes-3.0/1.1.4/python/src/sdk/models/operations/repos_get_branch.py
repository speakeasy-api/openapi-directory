"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import branch_with_protection as shared_branch_with_protection
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class ReposGetBranchRequest:
    
    branch: str = dataclasses.field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    r"""The name of the branch."""  
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ReposGetBranch415ApplicationJSON:
    r"""Preview header missing"""
    
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentation_url') }})  
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})  
    

@dataclasses.dataclass
class ReposGetBranchResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Moved permanently"""  
    branch_with_protection: Optional[shared_branch_with_protection.BranchWithProtection] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    repos_get_branch_415_application_json_object: Optional[ReposGetBranch415ApplicationJSON] = dataclasses.field(default=None)
    r"""Preview header missing"""  
    