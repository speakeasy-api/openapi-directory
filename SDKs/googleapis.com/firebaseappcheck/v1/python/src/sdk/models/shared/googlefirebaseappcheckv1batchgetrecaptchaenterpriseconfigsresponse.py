import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1recaptchaenterpriseconfig as shared_googlefirebaseappcheckv1recaptchaenterpriseconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse:
    r"""GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse
    Response message for the BatchGetRecaptchaEnterpriseConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1recaptchaenterpriseconfig.GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
