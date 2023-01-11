import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import instancequota as shared_instancequota


@dataclass_json
@dataclasses.dataclass
class ProvisioningQuota:
    r"""ProvisioningQuota
    A provisioning quota for a given project.
    """
    
    instance_quota: Optional[shared_instancequota.InstanceQuota] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceQuota') }})
    
