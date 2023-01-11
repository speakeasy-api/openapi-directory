import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationInverseVarianceWeightedRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_variances: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVariances') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationInverseVarianceWeightedRequest:
    request: PostPortfolioOptimizationInverseVarianceWeightedRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationInverseVarianceWeightedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_inverse_variance_weighted_200_application_json_object: Optional[PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJSON] = dataclasses.field(default=None)
    
