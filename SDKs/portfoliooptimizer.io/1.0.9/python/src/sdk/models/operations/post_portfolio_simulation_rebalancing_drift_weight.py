import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets:
    asset_prices: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetPrices') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequestBody:
    assets: list[PostPortfolioSimulationRebalancingDriftWeightRequestBodyAssets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    portfolios: list[PostPortfolioSimulationRebalancingDriftWeightRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios:
    portfolio_values: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON:
    portfolios: list[PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioSimulationRebalancingDriftWeightRequest:
    request: PostPortfolioSimulationRebalancingDriftWeightRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioSimulationRebalancingDriftWeightResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_simulation_rebalancing_drift_weight_200_application_json_object: Optional[PostPortfolioSimulationRebalancingDriftWeight200ApplicationJSON] = dataclasses.field(default=None)
    
