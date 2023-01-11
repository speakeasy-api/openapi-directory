import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class WritableRackReservationInput:
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    rack: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack') }})
    units: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    user: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    tenant: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
