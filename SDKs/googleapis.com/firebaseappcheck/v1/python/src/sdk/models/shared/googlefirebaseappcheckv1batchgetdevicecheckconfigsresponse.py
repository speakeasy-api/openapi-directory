import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1devicecheckconfig as shared_googlefirebaseappcheckv1devicecheckconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse
    Response message for the BatchGetDeviceCheckConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1devicecheckconfig.GoogleFirebaseAppcheckV1DeviceCheckConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
