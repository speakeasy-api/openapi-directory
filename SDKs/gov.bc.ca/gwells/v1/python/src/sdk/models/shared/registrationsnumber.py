import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegistrationsNumber:
    registries_activity: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('registries_activity') }})
    registration_no: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration_no') }})
    
