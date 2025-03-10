"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Any, Optional

class CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum(str, Enum):
    r"""The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador', 'monitor-only' or 'ssid-admin'"""
    FULL = 'full'
    GUEST_AMBASSADOR = 'guest-ambassador'
    MONITOR_ONLY = 'monitor-only'
    READ_ONLY = 'read-only'
    SSID_ADMIN = 'ssid-admin'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateOrganizationSamlRoleRequestBodyNetworks:
    
    access: CreateOrganizationSamlRoleRequestBodyNetworksAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('access') }})
    r"""The privilege of the SAML administrator on the network. Can be one of 'full', 'read-only', 'guest-ambassador', 'monitor-only' or 'ssid-admin'"""  
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('id') }})
    r"""The network ID"""  
    
class CreateOrganizationSamlRoleRequestBodyOrgAccessEnum(str, Enum):
    r"""The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'"""
    ENTERPRISE = 'enterprise'
    FULL = 'full'
    NONE = 'none'
    READ_ONLY = 'read-only'

class CreateOrganizationSamlRoleRequestBodyTagsAccessEnum(str, Enum):
    r"""The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'"""
    FULL = 'full'
    GUEST_AMBASSADOR = 'guest-ambassador'
    MONITOR_ONLY = 'monitor-only'
    READ_ONLY = 'read-only'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateOrganizationSamlRoleRequestBodyTags:
    
    access: CreateOrganizationSamlRoleRequestBodyTagsAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('access') }})
    r"""The privilege of the SAML administrator on the tag. Can be one of 'full', 'read-only', 'guest-ambassador' or 'monitor-only'"""  
    tag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tag') }})
    r"""The name of the tag"""  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CreateOrganizationSamlRoleRequestBody:
    
    org_access: CreateOrganizationSamlRoleRequestBodyOrgAccessEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('orgAccess') }})
    r"""The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'"""  
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('role') }})
    r"""The role of the SAML administrator"""  
    networks: Optional[list[CreateOrganizationSamlRoleRequestBodyNetworks]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('networks'), 'exclude': lambda f: f is None }})
    r"""The list of networks that the SAML administrator has privileges on"""  
    tags: Optional[list[CreateOrganizationSamlRoleRequestBodyTags]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tags'), 'exclude': lambda f: f is None }})
    r"""The list of tags that the SAML administrator has privleges on"""  
    

@dataclasses.dataclass
class CreateOrganizationSamlRoleRequest:
    
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})  
    request_body: CreateOrganizationSamlRoleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class CreateOrganizationSamlRoleResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    create_organization_saml_role_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    