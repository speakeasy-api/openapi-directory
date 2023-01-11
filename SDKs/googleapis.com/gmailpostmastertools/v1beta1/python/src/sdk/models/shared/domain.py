import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DomainPermissionEnum(str, Enum):
    PERMISSION_UNSPECIFIED = "PERMISSION_UNSPECIFIED"
    OWNER = "OWNER"
    READER = "READER"
    NONE = "NONE"


@dataclass_json
@dataclasses.dataclass
class Domain:
    r"""Domain
    A registered domain resource in the Postmaster API.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permission: Optional[DomainPermissionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    
