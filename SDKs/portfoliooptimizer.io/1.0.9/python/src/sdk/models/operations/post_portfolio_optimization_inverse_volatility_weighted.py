import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_volatilities: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVolatilities') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedRequest:
    request: PostPortfolioOptimizationInverseVolatilityWeightedRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationInverseVolatilityWeightedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_inverse_volatility_weighted_200_application_json_object: Optional[PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSON] = dataclasses.field(default=None)
    
