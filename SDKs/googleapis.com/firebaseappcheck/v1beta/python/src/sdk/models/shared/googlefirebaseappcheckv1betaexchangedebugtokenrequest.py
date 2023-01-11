import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest
    Request message for the ExchangeDebugToken method.
    """
    
    debug_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debugToken') }})
    
