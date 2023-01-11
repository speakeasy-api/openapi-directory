import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets:
    asset_prices: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPrices') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequestBody:
    assets: list[PostPortfolioSimulationRebalancingFixedWeightRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    portfolios: list[PostPortfolioSimulationRebalancingFixedWeightRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios:
    portfolio_values: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON:
    portfolios: list[PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioSimulationRebalancingFixedWeightRequest:
    request: PostPortfolioSimulationRebalancingFixedWeightRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioSimulationRebalancingFixedWeightResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_simulation_rebalancing_fixed_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingFixedWeight200ApplicationJSON] = dataclasses.field(default=None)
    
