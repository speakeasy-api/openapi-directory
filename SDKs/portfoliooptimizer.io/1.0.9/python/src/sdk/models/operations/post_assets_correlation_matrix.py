import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixRequestBody1Assets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixRequestBody1:
    assets: list[PostAssetsCorrelationMatrixRequestBody1Assets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixRequestBody2:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrix200ApplicationJSON:
    assets_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    

@dataclasses.dataclass
class PostAssetsCorrelationMatrixRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsCorrelationMatrixResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_correlation_matrix_200_application_json_object: Optional[PostAssetsCorrelationMatrix200ApplicationJSON] = dataclasses.field(default=None)
    
