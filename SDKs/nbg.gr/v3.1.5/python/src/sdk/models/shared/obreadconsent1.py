import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import obreaddata1 as shared_obreaddata1


@dataclass_json
@dataclasses.dataclass
class ObReadConsent1:
    data: shared_obreaddata1.ObReadData1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    risk: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Risk') }})
    
