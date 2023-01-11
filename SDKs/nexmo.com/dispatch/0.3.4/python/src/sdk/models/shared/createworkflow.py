import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CreateWorkflowTemplateEnum(str, Enum):
    FAILOVER = "failover"


@dataclass_json
@dataclasses.dataclass
class CreateWorkflow:
    template: Optional[CreateWorkflowTemplateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    workflow: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflow') }})
    
