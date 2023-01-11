import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse:
    r"""GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse
    Response message for SmartDeviceManagementService.ExecuteDeviceCommand
    """
    
    results: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
