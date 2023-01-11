import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import runtimeacceleratorconfig as shared_runtimeacceleratorconfig


@dataclass_json
@dataclasses.dataclass
class SwitchRuntimeRequest:
    r"""SwitchRuntimeRequest
    Request for switching a Managed Notebook Runtime.
    """
    
    accelerator_config: Optional[shared_runtimeacceleratorconfig.RuntimeAcceleratorConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorConfig') }})
    machine_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
