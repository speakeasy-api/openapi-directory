import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rate_request_body as shared_rate_request_body


@dataclass_json
@dataclasses.dataclass
class CalculateRatesRequestBody:
    r"""CalculateRatesRequestBody
    A rate shipment request body
    """
    
    rate_options: Optional[shared_rate_request_body.RateRequestBody] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_options') }})
    
