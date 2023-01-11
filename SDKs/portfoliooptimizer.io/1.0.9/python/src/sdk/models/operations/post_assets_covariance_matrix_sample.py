import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostAssetsCovarianceMatrixSampleRequestBodyAssets:
    asset_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCovarianceMatrixSampleRequestBody:
    assets: list[PostAssetsCovarianceMatrixSampleRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostAssetsCovarianceMatrixSample200ApplicationJSON:
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    

@dataclasses.dataclass
class PostAssetsCovarianceMatrixSampleRequest:
    request: PostAssetsCovarianceMatrixSampleRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostAssetsCovarianceMatrixSampleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_assets_covariance_matrix_sample_200_application_json_object: Optional[PostAssetsCovarianceMatrixSample200ApplicationJSON] = dataclasses.field(default=None)
    
