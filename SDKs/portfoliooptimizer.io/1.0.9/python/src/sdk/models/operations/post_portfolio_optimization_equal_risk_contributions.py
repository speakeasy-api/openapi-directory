import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints:
    maximum_assets_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    minimum_assets_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    constraints: Optional[PostPortfolioOptimizationEqualRiskContributionsRequestBodyConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationEqualRiskContributionsRequest:
    request: PostPortfolioOptimizationEqualRiskContributionsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationEqualRiskContributionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_equal_risk_contributions_200_application_json_object: Optional[PostPortfolioOptimizationEqualRiskContributions200ApplicationJSON] = dataclasses.field(default=None)
    
