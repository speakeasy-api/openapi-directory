import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsReturnsAverageRequestBodyAssets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsReturnsAverageRequestBody:
    assets: list[PostAssetsReturnsAverageRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsReturnsAverage200ApplicationJSONAssets:
    asset_average_return: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetAverageReturn') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsReturnsAverage200ApplicationJSON:
    assets: list[PostAssetsReturnsAverage200ApplicationJSONAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclasses.dataclass
class PostAssetsReturnsAverageRequest:
    request: PostAssetsReturnsAverageRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsReturnsAverageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_returns_average_200_application_json_object: Optional[PostAssetsReturnsAverage200ApplicationJSON] = dataclasses.field(default=None)
    
