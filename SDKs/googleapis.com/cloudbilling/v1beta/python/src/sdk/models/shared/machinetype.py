import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import custommachinetype as shared_custommachinetype
from ..shared import predefinedmachinetype as shared_predefinedmachinetype


@dataclass_json
@dataclasses.dataclass
class MachineType:
    r"""MachineType
    Specification of machine series, memory, and number of vCPUs.
    """
    
    custom_machine_type: Optional[shared_custommachinetype.CustomMachineType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMachineType') }})
    predefined_machine_type: Optional[shared_predefinedmachinetype.PredefinedMachineType] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedMachineType') }})
    
