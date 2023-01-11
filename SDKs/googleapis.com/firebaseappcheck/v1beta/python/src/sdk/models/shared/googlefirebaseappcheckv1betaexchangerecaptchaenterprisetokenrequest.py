import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeRecaptchaEnterpriseTokenRequest
    Request message for the ExchangeRecaptchaEnterpriseToken method.
    """
    
    recaptcha_enterprise_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recaptchaEnterpriseToken') }})
    
