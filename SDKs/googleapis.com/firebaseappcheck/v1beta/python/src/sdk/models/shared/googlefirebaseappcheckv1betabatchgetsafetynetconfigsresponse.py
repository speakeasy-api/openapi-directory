import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betasafetynetconfig as shared_googlefirebaseappcheckv1betasafetynetconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse
    Response message for the BatchGetSafetyNetConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1betasafetynetconfig.GoogleFirebaseAppcheckV1betaSafetyNetConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
