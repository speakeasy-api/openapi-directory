import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RunnerLabelsTypeEnum(str, Enum):
    READ_ONLY = "read-only"
    CUSTOM = "custom"


@dataclass_json
@dataclasses.dataclass
class RunnerLabels:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[RunnerLabelsTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class Runner:
    r"""Runner
    A self hosted runner
    """
    
    busy: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('busy') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: list[RunnerLabels] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
