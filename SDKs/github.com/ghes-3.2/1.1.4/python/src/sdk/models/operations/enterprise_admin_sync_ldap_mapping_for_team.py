"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForTeamRequest:
    
    team_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'team_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the team."""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON:
    r"""Response"""
    
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('status'), 'exclude': lambda f: f is None }})  
    

@dataclasses.dataclass
class EnterpriseAdminSyncLdapMappingForTeamResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    enterprise_admin_sync_ldap_mapping_for_team_201_application_json_object: Optional[EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    