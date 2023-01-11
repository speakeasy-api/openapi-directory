import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewayapiconfig as shared_apigatewayapiconfig


@dataclass_json
@dataclasses.dataclass
class ApigatewayListAPIConfigsResponse:
    r"""ApigatewayListAPIConfigsResponse
    Response message for ApiGatewayService.ListApiConfigs
    """
    
    api_configs: Optional[list[shared_apigatewayapiconfig.ApigatewayAPIConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiConfigs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable_locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachableLocations') }})
    
