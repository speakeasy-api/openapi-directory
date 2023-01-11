import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betarecaptchaconfig as shared_googlefirebaseappcheckv1betarecaptchaconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse
    Response message for the BatchGetRecaptchaConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1betarecaptchaconfig.GoogleFirebaseAppcheckV1betaRecaptchaConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
