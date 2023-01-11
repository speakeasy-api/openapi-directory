import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChangeRequestChangesRules:
    action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass_json
@dataclasses.dataclass
class ChangeRequestChanges:
    rules: Optional[list[ChangeRequestChangesRules]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ChangeRequestStatusEnum(str, Enum):
    DEPLOYED = "Deployed"
    PENDING_DEPLOYMENT = "Pending deployment"
    CANCELLED = "Cancelled"
    PENDING_VALIDATION = "Pending validation"
    OPEN = "Open"


@dataclass_json
@dataclasses.dataclass
class ChangeRequest:
    r"""ChangeRequest
    Content of the change request
    """
    
    acceptable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptable') }})
    changes: Optional[ChangeRequestChanges] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    created_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created by') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[ChangeRequestStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
