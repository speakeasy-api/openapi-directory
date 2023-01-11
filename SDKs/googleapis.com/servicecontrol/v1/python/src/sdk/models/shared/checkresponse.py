import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import checkerror as shared_checkerror
from ..shared import checkinfo as shared_checkinfo
from ..shared import quotainfo as shared_quotainfo


@dataclass_json
@dataclasses.dataclass
class CheckResponse:
    r"""CheckResponse
    Response message for the Check method.
    """
    
    check_errors: Optional[list[shared_checkerror.CheckError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkErrors') }})
    check_info: Optional[shared_checkinfo.CheckInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkInfo') }})
    operation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    quota_info: Optional[shared_quotainfo.QuotaInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quotaInfo') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    service_rollout_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRolloutId') }})
    
