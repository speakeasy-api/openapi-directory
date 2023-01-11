import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vmcreationconfig as shared_vmcreationconfig
from ..shared import vmselectionconfig as shared_vmselectionconfig


@dataclass_json
@dataclasses.dataclass
class GenerateSSHScriptRequest:
    r"""GenerateSSHScriptRequest
    Request message for 'GenerateSshScript' request.
    """
    
    vm: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vm') }})
    vm_creation_config: Optional[shared_vmcreationconfig.VMCreationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmCreationConfig') }})
    vm_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmPort') }})
    vm_selection_config: Optional[shared_vmselectionconfig.VMSelectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmSelectionConfig') }})
    
