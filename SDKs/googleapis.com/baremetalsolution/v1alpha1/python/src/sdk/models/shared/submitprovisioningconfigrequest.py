import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import provisioningconfig as shared_provisioningconfig


@dataclass_json
@dataclasses.dataclass
class SubmitProvisioningConfigRequest:
    r"""SubmitProvisioningConfigRequest
    Request for SubmitProvisioningConfig.
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    provisioning_config: Optional[shared_provisioningconfig.ProvisioningConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisioningConfig') }})
    
