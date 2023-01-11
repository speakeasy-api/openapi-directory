import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1safetynetconfig as shared_googlefirebaseappcheckv1safetynetconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse
    Response message for the BatchGetSafetyNetConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1safetynetconfig.GoogleFirebaseAppcheckV1SafetyNetConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
