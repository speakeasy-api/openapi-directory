import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceSampleRequestBodyAssets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceSampleRequestBody:
    assets: list[PostAssetsVarianceSampleRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceSample200ApplicationJSONAssets:
    asset_variance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVariance') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceSample200ApplicationJSON:
    assets: list[PostAssetsVarianceSample200ApplicationJSONAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclasses.dataclass
class PostAssetsVarianceSampleRequest:
    request: PostAssetsVarianceSampleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsVarianceSampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_variance_sample_200_application_json_object: Optional[PostAssetsVarianceSample200ApplicationJSON] = dataclasses.field(default=None)
    
