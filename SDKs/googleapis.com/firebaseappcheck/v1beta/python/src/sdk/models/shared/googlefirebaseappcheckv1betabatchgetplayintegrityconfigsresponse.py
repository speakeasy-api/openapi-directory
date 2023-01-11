import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betaplayintegrityconfig as shared_googlefirebaseappcheckv1betaplayintegrityconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse
    Response message for the BatchGetPlayIntegrityConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1betaplayintegrityconfig.GoogleFirebaseAppcheckV1betaPlayIntegrityConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
