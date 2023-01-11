import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_market_capitalizations: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsMarketCapitalizations') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedRequest:
    request: PostPortfolioOptimizationMarketCapitalizationWeightedRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationMarketCapitalizationWeightedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_market_capitalization_weighted_200_application_json_object: Optional[PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSON] = dataclasses.field(default=None)
    
