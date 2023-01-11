import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import quotaoperation as shared_quotaoperation


@dataclass_json
@dataclasses.dataclass
class AllocateQuotaRequest:
    r"""AllocateQuotaRequest
    Request message for the AllocateQuota method.
    """
    
    allocate_operation: Optional[shared_quotaoperation.QuotaOperation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocateOperation') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    
