import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewaygateway as shared_apigatewaygateway


@dataclass_json
@dataclasses.dataclass
class ApigatewayListGatewaysResponse:
    r"""ApigatewayListGatewaysResponse
    Response message for ApiGatewayService.ListGateways
    """
    
    gateways: Optional[list[shared_apigatewaygateway.ApigatewayGateway]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateways') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable_locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachableLocations') }})
    
