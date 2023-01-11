import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAPIV2ListMarketsHeaders:
    x_rapid_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-RapidApi-Key', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2ListMarkets200ApplicationJSONData:
    all: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    allowed_for_your_subscription: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_for_your_subscription') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2ListMarkets200ApplicationJSON:
    data: Optional[GetAPIV2ListMarkets200ApplicationJSONData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAPIV2ListMarkets404ApplicationJSON:
    errors: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclasses.dataclass
class GetAPIV2ListMarketsRequest:
    headers: GetAPIV2ListMarketsHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetAPIV2ListMarketsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_api_v2_list_markets_200_application_json_object: Optional[GetAPIV2ListMarkets200ApplicationJSON] = dataclasses.field(default=None)
    get_api_v2_list_markets_404_application_json_object: Optional[GetAPIV2ListMarkets404ApplicationJSON] = dataclasses.field(default=None)
    
