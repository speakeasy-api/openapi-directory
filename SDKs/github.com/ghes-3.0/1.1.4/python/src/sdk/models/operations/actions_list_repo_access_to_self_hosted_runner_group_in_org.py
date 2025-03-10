"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import minimal_repository as shared_minimal_repository
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})  
    runner_group_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'runner_group_id', 'style': 'simple', 'explode': False }})
    r"""Unique identifier of the self-hosted runner group."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""Results per page (max 100)"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON:
    r"""Response"""
    
    repositories: list[shared_minimal_repository.MinimalRepository] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('repositories') }})  
    total_count: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('total_count') }})  
    

@dataclasses.dataclass
class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    actions_list_repo_access_to_self_hosted_runner_group_in_org_200_application_json_object: Optional[ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    