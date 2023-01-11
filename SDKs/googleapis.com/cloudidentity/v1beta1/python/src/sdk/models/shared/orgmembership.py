import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrgMembershipTypeEnum(str, Enum):
    ENTITY_TYPE_UNSPECIFIED = "ENTITY_TYPE_UNSPECIFIED"
    SHARED_DRIVE = "SHARED_DRIVE"


@dataclass_json
@dataclasses.dataclass
class OrgMembership:
    r"""OrgMembership
    A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a \"member\".
    """
    
    member: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    member_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberUri') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[OrgMembershipTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
