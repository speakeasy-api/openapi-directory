import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceRequestBody1Assets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceRequestBody1:
    assets: list[PostAssetsVarianceRequestBody1Assets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceRequestBody2:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceRequestBody3Assets:
    asset_volatility: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVolatility') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVarianceRequestBody3:
    assets: list[PostAssetsVarianceRequestBody3Assets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVariance200ApplicationJSONAssets:
    asset_variance: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetVariance') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsVariance200ApplicationJSON:
    assets: list[PostAssetsVariance200ApplicationJSONAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclasses.dataclass
class PostAssetsVarianceRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsVarianceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_variance_200_application_json_object: Optional[PostAssetsVariance200ApplicationJSON] = dataclasses.field(default=None)
    
