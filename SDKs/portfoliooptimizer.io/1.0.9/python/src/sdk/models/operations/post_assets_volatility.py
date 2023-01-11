import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilityRequestBody1Assets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilityRequestBody1:
    assets: list[PostAssetsVolatilityRequestBody1Assets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilityRequestBody2:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilityRequestBody3Assets:
    asset_variance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVariance') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatilityRequestBody3:
    assets: list[PostAssetsVolatilityRequestBody3Assets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatility200ApplicationJSONAssets:
    asset_volatility: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVolatility') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVolatility200ApplicationJSON:
    assets: list[PostAssetsVolatility200ApplicationJSONAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclasses.dataclass
class PostAssetsVolatilityRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsVolatilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_volatility_200_application_json_object: Optional[PostAssetsVolatility200ApplicationJSON] = dataclasses.field(default=None)
    
