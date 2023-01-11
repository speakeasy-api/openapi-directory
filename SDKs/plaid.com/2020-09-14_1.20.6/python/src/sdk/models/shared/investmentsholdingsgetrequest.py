import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import investmentholdingsgetrequestoptions as shared_investmentholdingsgetrequestoptions


@dataclass_json
@dataclasses.dataclass
class InvestmentsHoldingsGetRequest:
    r"""InvestmentsHoldingsGetRequest
    InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get`
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_investmentholdingsgetrequestoptions.InvestmentHoldingsGetRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
