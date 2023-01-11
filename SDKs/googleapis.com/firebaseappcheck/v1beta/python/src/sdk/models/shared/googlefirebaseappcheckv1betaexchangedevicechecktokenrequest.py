import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeDeviceCheckTokenRequest
    Request message for the ExchangeDeviceCheckToken method.
    """
    
    device_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceToken') }})
    
