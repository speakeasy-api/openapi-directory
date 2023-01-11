import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedzone as shared_managedzone


@dataclass_json
@dataclasses.dataclass
class OperationManagedZoneContext:
    new_value: Optional[shared_managedzone.ManagedZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    old_value: Optional[shared_managedzone.ManagedZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldValue') }})
    
