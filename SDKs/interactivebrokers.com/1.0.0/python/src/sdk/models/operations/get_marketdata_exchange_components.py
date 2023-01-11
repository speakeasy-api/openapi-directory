import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetMarketdataExchangeComponents200ApplicationJSONMapping:
    bit: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bit') }})
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    exchange: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMarketdataExchangeComponents200ApplicationJSON:
    complete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Complete') }})
    con_id: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConId') }})
    mapping: Optional[list[GetMarketdataExchangeComponents200ApplicationJSONMapping]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapping') }})
    

@dataclasses.dataclass
class GetMarketdataExchangeComponentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_marketdata_exchange_components_200_application_json_objects: Optional[list[GetMarketdataExchangeComponents200ApplicationJSON]] = dataclasses.field(default=None)
    
