import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1recaptchav3config as shared_googlefirebaseappcheckv1recaptchav3config


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse
    Response message for the BatchGetRecaptchaV3Configs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1recaptchav3config.GoogleFirebaseAppcheckV1RecaptchaV3Config]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
