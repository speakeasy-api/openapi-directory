import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationMinimumCorrelationRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    assets_volatilities: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsVolatilities') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationMinimumCorrelationRequest:
    request: PostPortfolioOptimizationMinimumCorrelationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationMinimumCorrelationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_minimum_correlation_200_application_json_object: Optional[PostPortfolioOptimizationMinimumCorrelation200ApplicationJSON] = dataclasses.field(default=None)
    
