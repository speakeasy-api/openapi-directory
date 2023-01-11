import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import liabilitiesgetrequestoptions as shared_liabilitiesgetrequestoptions


@dataclass_json
@dataclasses.dataclass
class LiabilitiesGetRequest:
    r"""LiabilitiesGetRequest
    LiabilitiesGetRequest defines the request schema for `/liabilities/get`
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[shared_liabilitiesgetrequestoptions.LiabilitiesGetRequestOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
