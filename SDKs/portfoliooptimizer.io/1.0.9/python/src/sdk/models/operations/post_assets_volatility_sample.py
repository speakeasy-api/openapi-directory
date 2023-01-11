import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilitySampleRequestBodyAssets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilitySampleRequestBody:
    assets: list[PostAssetsVolatilitySampleRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilitySample200ApplicationJSONAssets:
    asset_volatility: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVolatility') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilitySample200ApplicationJSON:
    assets: list[PostAssetsVolatilitySample200ApplicationJSONAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclasses.dataclass
class PostAssetsVolatilitySampleRequest:
    request: PostAssetsVolatilitySampleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsVolatilitySampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_volatility_sample_200_application_json_object: Optional[PostAssetsVolatilitySample200ApplicationJSON] = dataclasses.field(default=None)
    
