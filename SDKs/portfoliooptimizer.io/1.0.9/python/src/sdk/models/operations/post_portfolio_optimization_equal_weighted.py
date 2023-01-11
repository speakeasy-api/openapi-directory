import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationEqualWeightedRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationEqualWeighted200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationEqualWeightedRequest:
    request: PostPortfolioOptimizationEqualWeightedRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationEqualWeightedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_equal_weighted_200_application_json_object: Optional[PostPortfolioOptimizationEqualWeighted200ApplicationJSON] = dataclasses.field(default=None)
    
