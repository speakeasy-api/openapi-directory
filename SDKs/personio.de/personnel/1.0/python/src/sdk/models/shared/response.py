import dataclasses
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Response:
    data: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
