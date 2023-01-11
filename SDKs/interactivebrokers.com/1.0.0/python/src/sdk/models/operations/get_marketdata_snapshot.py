import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetMarketdataSnapshotRequestBody:
    conid: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conid') }})
    currency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    exchange: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    symbol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMarketdataSnapshot200ApplicationJSONBid:
    market: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('market') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMarketdataSnapshot200ApplicationJSONClosing:
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMarketdataSnapshot200ApplicationJSONOffer:
    market: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('market') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMarketdataSnapshot200ApplicationJSONTrade:
    market: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('market') }})
    price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    size: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    time: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclasses.dataclass
class GetMarketdataSnapshot200ApplicationJSON:
    bid: Optional[GetMarketdataSnapshot200ApplicationJSONBid] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bid') }})
    closing: Optional[GetMarketdataSnapshot200ApplicationJSONClosing] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Closing') }})
    complete: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Complete') }})
    conid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Conid') }})
    offer: Optional[GetMarketdataSnapshot200ApplicationJSONOffer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Offer') }})
    temporality: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Temporality') }})
    trade: Optional[GetMarketdataSnapshot200ApplicationJSONTrade] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Trade') }})
    

@dataclasses.dataclass
class GetMarketdataSnapshotRequest:
    request: list[GetMarketdataSnapshotRequestBody] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetMarketdataSnapshotResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_marketdata_snapshot_200_application_json_objects: Optional[list[GetMarketdataSnapshot200ApplicationJSON]] = dataclasses.field(default=None)
    
