import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stage as shared_stage


@dataclass_json
@dataclasses.dataclass
class SerialPipeline:
    r"""SerialPipeline
    SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
    """
    
    stages: Optional[list[shared_stage.Stage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stages') }})
    
