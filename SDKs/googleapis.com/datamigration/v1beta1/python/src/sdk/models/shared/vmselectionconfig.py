import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VMSelectionConfig:
    r"""VMSelectionConfig
    VM selection configuration message
    """
    
    vm_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmZone') }})
    
