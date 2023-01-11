import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualmachine as shared_virtualmachine


@dataclass_json
@dataclasses.dataclass
class Resources:
    r"""Resources
    The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.
    """
    
    regions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    virtual_machine: Optional[shared_virtualmachine.VirtualMachine] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachine') }})
    zones: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zones') }})
    
