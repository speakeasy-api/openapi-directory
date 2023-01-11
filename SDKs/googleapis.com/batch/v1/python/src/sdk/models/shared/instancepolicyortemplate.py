import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancepolicy as shared_instancepolicy


@dataclass_json
@dataclasses.dataclass
class InstancePolicyOrTemplate:
    r"""InstancePolicyOrTemplate
    Either an InstancePolicy or an instance template.
    """
    
    install_gpu_drivers: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installGpuDrivers') }})
    instance_template: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTemplate') }})
    policy: Optional[shared_instancepolicy.InstancePolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
