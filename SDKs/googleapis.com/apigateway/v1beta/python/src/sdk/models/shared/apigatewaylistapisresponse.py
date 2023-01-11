import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewayapi as shared_apigatewayapi


@dataclass_json
@dataclasses.dataclass
class ApigatewayListApisResponse:
    r"""ApigatewayListApisResponse
    Response message for ApiGatewayService.ListApis
    """
    
    apis: Optional[list[shared_apigatewayapi.ApigatewayAPI]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apis') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable_locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachableLocations') }})
    
