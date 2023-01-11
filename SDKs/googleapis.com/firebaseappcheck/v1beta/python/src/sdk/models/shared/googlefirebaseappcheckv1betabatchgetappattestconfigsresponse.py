import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betaappattestconfig as shared_googlefirebaseappcheckv1betaappattestconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse
    Response message for the BatchGetAppAttestConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1betaappattestconfig.GoogleFirebaseAppcheckV1betaAppAttestConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
