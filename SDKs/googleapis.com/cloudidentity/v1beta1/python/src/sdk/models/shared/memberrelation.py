import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitykey as shared_entitykey
from ..shared import transitivemembershiprole as shared_transitivemembershiprole

class MemberRelationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DIRECT = "DIRECT"
    INDIRECT = "INDIRECT"
    DIRECT_AND_INDIRECT = "DIRECT_AND_INDIRECT"


@dataclass_json
@dataclasses.dataclass
class MemberRelation:
    r"""MemberRelation
    Message representing a transitive membership of a group.
    """
    
    member: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    preferred_member_key: Optional[list[shared_entitykey.EntityKey]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMemberKey') }})
    relation_type: Optional[MemberRelationRelationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationType') }})
    roles: Optional[list[shared_transitivemembershiprole.TransitiveMembershipRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
