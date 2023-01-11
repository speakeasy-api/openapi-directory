import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betadevicecheckconfig as shared_googlefirebaseappcheckv1betadevicecheckconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse
    Response message for the BatchGetDeviceCheckConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1betadevicecheckconfig.GoogleFirebaseAppcheckV1betaDeviceCheckConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
