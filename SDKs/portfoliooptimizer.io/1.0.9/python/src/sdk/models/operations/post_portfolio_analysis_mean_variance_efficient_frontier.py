import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints:
    assets_groups: Optional[list[list[int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    assets_groups_matrix: Optional[list[list[float]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsMatrix') }})
    maximum_assets_groups_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsGroupsWeights') }})
    maximum_assets_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    maximum_portfolio_exposure: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPortfolioExposure') }})
    minimum_assets_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    minimum_portfolio_exposure: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPortfolioExposure') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    assets_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    constraints: Optional[PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBodyConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    portfolios: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    portfolio_return: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturn') }})
    portfolio_volatility: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioVolatility') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest:
    request: PostPortfolioAnalysisMeanVarianceEfficientFrontierRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_mean_variance_efficient_frontier_200_application_json_object: Optional[PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSON] = dataclasses.field(default=None)
    
