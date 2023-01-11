import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import operation as shared_operation


@dataclass_json
@dataclasses.dataclass
class ReportRequest:
    r"""ReportRequest
    Request message for the Report method.
    """
    
    operations: Optional[list[shared_operation.Operation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operations') }})
    service_config_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceConfigId') }})
    
