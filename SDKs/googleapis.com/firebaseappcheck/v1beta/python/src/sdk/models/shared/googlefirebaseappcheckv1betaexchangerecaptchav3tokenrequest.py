import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeRecaptchaV3TokenRequest
    Request message for the ExchangeRecaptchaV3Token method.
    """
    
    recaptcha_v3_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recaptchaV3Token') }})
    
