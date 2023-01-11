import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import entitykey as shared_entitykey
from ..shared import transitivemembershiprole as shared_transitivemembershiprole

class GroupRelationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DIRECT = "DIRECT"
    INDIRECT = "INDIRECT"
    DIRECT_AND_INDIRECT = "DIRECT_AND_INDIRECT"


@dataclass_json
@dataclasses.dataclass
class GroupRelation:
    r"""GroupRelation
    Message representing a transitive group of a user or a group.
    """
    
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    group: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    group_key: Optional[shared_entitykey.EntityKey] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupKey') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    relation_type: Optional[GroupRelationRelationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationType') }})
    roles: Optional[list[shared_transitivemembershiprole.TransitiveMembershipRole]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
