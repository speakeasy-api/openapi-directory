import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rate_request_body as shared_rate_request_body


@dataclass_json
@dataclasses.dataclass
class CompareBulkRatesRequestBody:
    r"""CompareBulkRatesRequestBody
    A rate shipments request body
    """
    
    rate_options: shared_rate_request_body.RateRequestBody = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_options') }})
    
