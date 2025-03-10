"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import user as shared_user
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class MembershipRoleEnum(str, Enum):
    r"""Output only. User's role within a Chat space, which determines their permitted actions in the space."""
    MEMBERSHIP_ROLE_UNSPECIFIED = 'MEMBERSHIP_ROLE_UNSPECIFIED'
    ROLE_MEMBER = 'ROLE_MEMBER'
    ROLE_MANAGER = 'ROLE_MANAGER'

class MembershipStateEnum(str, Enum):
    r"""Output only. State of the membership."""
    MEMBERSHIP_STATE_UNSPECIFIED = 'MEMBERSHIP_STATE_UNSPECIFIED'
    JOINED = 'JOINED'
    INVITED = 'INVITED'
    NOT_A_MEMBER = 'NOT_A_MEMBER'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class Membership:
    r"""Represents a membership relation in Google Chat, such as whether a user or Chat app is invited to, part of, or absent from a space."""
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. The creation time of the membership, such as when a member joined or was invited to join a space."""  
    member: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('member'), 'exclude': lambda f: f is None }})
    r"""A user in Google Chat."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Resource name of the membership, assigned by the server. Format: spaces/{space}/members/{member}"""  
    role: Optional[MembershipRoleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('role'), 'exclude': lambda f: f is None }})
    r"""Output only. User's role within a Chat space, which determines their permitted actions in the space."""  
    state: Optional[MembershipStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""Output only. State of the membership."""  
    