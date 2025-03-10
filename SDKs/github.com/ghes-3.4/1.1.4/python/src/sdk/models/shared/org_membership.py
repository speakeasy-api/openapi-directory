"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import nullable_simple_user as shared_nullable_simple_user
from ..shared import organization_simple as shared_organization_simple
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OrgMembershipPermissions:
    
    can_create_repository: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('can_create_repository') }})  
    
class OrgMembershipRoleEnum(str, Enum):
    r"""The user's membership type in the organization."""
    ADMIN = 'admin'
    MEMBER = 'member'
    BILLING_MANAGER = 'billing_manager'

class OrgMembershipStateEnum(str, Enum):
    r"""The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation."""
    ACTIVE = 'active'
    PENDING = 'pending'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class OrgMembership:
    r"""Org Membership"""
    
    organization: shared_organization_simple.OrganizationSimple = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('organization') }})
    r"""A GitHub organization."""  
    organization_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('organization_url') }})  
    role: OrgMembershipRoleEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('role') }})
    r"""The user's membership type in the organization."""  
    state: OrgMembershipStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state') }})
    r"""The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation."""  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})  
    user: shared_nullable_simple_user.NullableSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('user') }})
    r"""A GitHub user."""  
    permissions: Optional[OrgMembershipPermissions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('permissions'), 'exclude': lambda f: f is None }})  
    