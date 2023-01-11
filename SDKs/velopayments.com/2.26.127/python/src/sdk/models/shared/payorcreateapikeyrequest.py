import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PayorCreateAPIKeyRequestRolesEnum(str, Enum):
    PAYOR_ADMIN = "payor.admin"
    PAYOR_SUPPORT = "payor.support"


@dataclass_json
@dataclasses.dataclass
class PayorCreateAPIKeyRequest:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    roles: list[PayorCreateAPIKeyRequestRolesEnum] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
