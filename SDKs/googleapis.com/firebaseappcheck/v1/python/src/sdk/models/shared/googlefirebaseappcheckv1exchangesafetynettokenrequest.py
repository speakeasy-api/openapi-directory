import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest:
    r"""GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest
    Request message for the ExchangeSafetyNetToken method.
    """
    
    safety_net_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safetyNetToken') }})
    
