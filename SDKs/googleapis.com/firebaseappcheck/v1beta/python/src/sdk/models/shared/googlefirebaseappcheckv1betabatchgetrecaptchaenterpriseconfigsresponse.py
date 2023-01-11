import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betarecaptchaenterpriseconfig as shared_googlefirebaseappcheckv1betarecaptchaenterpriseconfig


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse:
    r"""GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse
    Response message for the BatchGetRecaptchaEnterpriseConfigs method.
    """
    
    configs: Optional[list[shared_googlefirebaseappcheckv1betarecaptchaenterpriseconfig.GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configs') }})
    
