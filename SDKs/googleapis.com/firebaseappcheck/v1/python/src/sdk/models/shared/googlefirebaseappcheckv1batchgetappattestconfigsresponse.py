import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1appattestconfig as shared_googlefirebaseappcheckv1appattestconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse
    Response message for the BatchGetAppAttestConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1appattestconfig.GoogleFirebaseAppcheckV1AppAttestConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
