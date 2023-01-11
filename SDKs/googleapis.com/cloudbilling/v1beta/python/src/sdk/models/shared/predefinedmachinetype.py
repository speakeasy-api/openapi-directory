import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PredefinedMachineType:
    r"""PredefinedMachineType
    Specification of a predefined machine type.
    """
    
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    
