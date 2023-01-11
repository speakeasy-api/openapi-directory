import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operation as shared_operation


@dataclass_json
@dataclasses.dataclass
class CheckRequest:
    r"""CheckRequest
    Request message for the Check method.
    """
    
    operation: Optional[shared_operation.Operation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    request_project_settings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestProjectSettings') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    skip_activation_check: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipActivationCheck') }})
    
