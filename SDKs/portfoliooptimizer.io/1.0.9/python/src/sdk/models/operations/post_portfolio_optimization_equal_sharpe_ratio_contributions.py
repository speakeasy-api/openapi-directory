import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    assets_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    risk_free_rate: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('riskFreeRate') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsRequest:
    request: PostPortfolioOptimizationEqualSharpeRatioContributionsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationEqualSharpeRatioContributionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_equal_sharpe_ratio_contributions_200_application_json_object: Optional[PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSON] = dataclasses.field(default=None)
    
