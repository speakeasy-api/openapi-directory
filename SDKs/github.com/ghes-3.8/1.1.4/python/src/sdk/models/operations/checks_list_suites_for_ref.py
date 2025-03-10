"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import check_suite as shared_check_suite
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class ChecksListSuitesForRefRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    r"""The account owner of the repository. The name is not case sensitive."""  
    ref: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ref', 'style': 'simple', 'explode': False }})
    r"""ref parameter"""  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    r"""The name of the repository. The name is not case sensitive."""  
    app_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'app_id', 'style': 'form', 'explode': True }})
    r"""Filters check suites by GitHub App `id`."""  
    check_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'check_name', 'style': 'form', 'explode': True }})
    r"""Returns check runs with the specified `name`."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results per page (max 100)."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ChecksListSuitesForRef200ApplicationJSON:
    r"""Response"""
    
    check_suites: list[shared_check_suite.CheckSuite] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('check_suites') }})  
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_count') }})  
    

@dataclasses.dataclass
class ChecksListSuitesForRefResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    checks_list_suites_for_ref_200_application_json_object: Optional[ChecksListSuitesForRef200ApplicationJSON] = dataclasses.field(default=None)
    r"""Response"""  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    