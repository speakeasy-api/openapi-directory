import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsReturnsRequestBodyAssets:
    asset_prices: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPrices') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsReturnsRequestBody:
    assets: list[PostAssetsReturnsRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsReturns200ApplicationJSONAssets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsReturns200ApplicationJSON:
    assets: list[PostAssetsReturns200ApplicationJSONAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclasses.dataclass
class PostAssetsReturnsRequest:
    request: PostAssetsReturnsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsReturnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_returns_200_application_json_object: Optional[PostAssetsReturns200ApplicationJSON] = dataclasses.field(default=None)
    
