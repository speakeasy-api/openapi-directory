import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualmachineconfig as shared_virtualmachineconfig
from ..shared import virtualmachineconfig as shared_virtualmachineconfig


@dataclass_json
@dataclasses.dataclass
class VirtualMachineInput:
    r"""VirtualMachineInput
    Runtime using Virtual Machine for computing.
    """
    
    virtual_machine_config: Optional[shared_virtualmachineconfig.VirtualMachineConfigInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachineConfig') }})
    

@dataclass_json
@dataclasses.dataclass
class VirtualMachine:
    r"""VirtualMachine
    Runtime using Virtual Machine for computing.
    """
    
    instance_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    instance_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceName') }})
    virtual_machine_config: Optional[shared_virtualmachineconfig.VirtualMachineConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachineConfig') }})
    
