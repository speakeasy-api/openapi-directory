import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsCovarianceMatrixValidationRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    
class PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum(str, Enum):
    VALID_COVARIANCE_MATRIX = "valid covariance matrix"
    INVALID_COVARIANCE_MATRIX_NON_SYMMETRIC_MATRIX = "invalid covariance matrix - non symmetric matrix"
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_DIAGONAL_ELEMENTS = "invalid covariance matrix - non positive diagonal elements"
    INVALID_COVARIANCE_MATRIX_NON_POSITIVE_SEMI_DEFINITE_MATRIX = "invalid covariance matrix - non positive semi-definite matrix"


@dataclass_json
@dataclasses.dataclass
class PostAssetsCovarianceMatrixValidation200ApplicationJSON:
    message: PostAssetsCovarianceMatrixValidation200ApplicationJSONMessageEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class PostAssetsCovarianceMatrixValidationRequest:
    request: PostAssetsCovarianceMatrixValidationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsCovarianceMatrixValidationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_covariance_matrix_validation_200_application_json_object: Optional[PostAssetsCovarianceMatrixValidation200ApplicationJSON] = dataclasses.field(default=None)
    
