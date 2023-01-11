import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixNearestRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_approximate_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsApproximateCorrelationMatrix') }})
    assets_fixed_correlations: Optional[list[list[int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsFixedCorrelations') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixNearest200ApplicationJSON:
    assets_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    

@dataclasses.dataclass
class PostAssetsCorrelationMatrixNearestRequest:
    request: PostAssetsCorrelationMatrixNearestRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsCorrelationMatrixNearestResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_correlation_matrix_nearest_200_application_json_object: Optional[PostAssetsCorrelationMatrixNearest200ApplicationJSON] = dataclasses.field(default=None)
    
