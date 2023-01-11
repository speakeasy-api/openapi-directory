import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1playintegrityconfig as shared_googlefirebaseappcheckv1playintegrityconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse
    Response message for the BatchGetPlayIntegrityConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1playintegrityconfig.GoogleFirebaseAppcheckV1PlayIntegrityConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
