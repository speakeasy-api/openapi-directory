import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets:
    asset_prices: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPrices') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequestBody:
    assets: list[PostPortfolioSimulationRebalancingRandomWeightRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    portfolios: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios:
    portfolio_values: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON:
    portfolios: list[PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioSimulationRebalancingRandomWeightRequest:
    request: PostPortfolioSimulationRebalancingRandomWeightRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioSimulationRebalancingRandomWeightResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_simulation_rebalancing_random_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingRandomWeight200ApplicationJSON] = dataclasses.field(default=None)
    
