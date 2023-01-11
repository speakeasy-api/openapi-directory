import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitykey as shared_entitykey
from ..shared import membershiprole1 as shared_membershiprole1
from ..shared import membershiprole as shared_membershiprole

class MembershipTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    USER = "USER"
    SERVICE_ACCOUNT = "SERVICE_ACCOUNT"
    GROUP = "GROUP"
    SHARED_DRIVE = "SHARED_DRIVE"
    OTHER = "OTHER"


@dataclass_json
@dataclasses.dataclass
class Membership:
    r"""Membership
    A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a \"member\".
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    member_key: Optional[shared_entitykey.EntityKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberKey') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    preferred_member_key: Optional[shared_entitykey.EntityKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMemberKey') }})
    roles: Optional[list[shared_membershiprole1.MembershipRole1]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    type: Optional[MembershipTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class MembershipInput:
    r"""MembershipInput
    A membership within the Cloud Identity Groups API. A `Membership` defines a relationship between a `Group` and an entity belonging to that `Group`, referred to as a \"member\".
    """
    
    member_key: Optional[shared_entitykey.EntityKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberKey') }})
    preferred_member_key: Optional[shared_entitykey.EntityKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMemberKey') }})
    roles: Optional[list[shared_membershiprole.MembershipRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
