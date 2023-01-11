import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum(str, Enum):
    MINIMUM_EQUICORRELATION_MATRIX = "minimumEquicorrelationMatrix"
    ZERO_EQUICORRELATION_MATRIX = "zeroEquicorrelationMatrix"
    MAXIMUM_EQUICORRELATION_MATRIX = "maximumEquicorrelationMatrix"


@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixShrinkageRequestBody1:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    shrinkage_factor: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageFactor') }})
    shrinkage_target: PostAssetsCorrelationMatrixShrinkageRequestBody1ShrinkageTargetEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageTarget') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixShrinkageRequestBody2:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    shrinkage_factor: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageFactor') }})
    shrinkage_target_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shrinkageTargetCorrelationMatrix') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCorrelationMatrixShrinkage200ApplicationJSON:
    assets_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    

@dataclasses.dataclass
class PostAssetsCorrelationMatrixShrinkageRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsCorrelationMatrixShrinkageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_correlation_matrix_shrinkage_200_application_json_object: Optional[PostAssetsCorrelationMatrixShrinkage200ApplicationJSON] = dataclasses.field(default=None)
    
