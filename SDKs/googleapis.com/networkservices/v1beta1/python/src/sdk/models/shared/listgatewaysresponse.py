import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gateway as shared_gateway


@dataclass_json
@dataclasses.dataclass
class ListGatewaysResponse:
    r"""ListGatewaysResponse
    Response returned by the ListGateways method.
    """
    
    gateways: Optional[list[shared_gateway.Gateway]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateways') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
