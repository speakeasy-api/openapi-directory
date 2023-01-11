import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints:
    assets_groups: Optional[list[list[int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    assets_groups_matrix: Optional[list[list[float]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsMatrix') }})
    maximum_assets_groups_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsGroupsWeights') }})
    maximum_assets_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumAssetsWeights') }})
    maximum_portfolio_exposure: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPortfolioExposure') }})
    minimum_assets_weights: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumAssetsWeights') }})
    minimum_portfolio_exposure: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumPortfolioExposure') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationMaximumDecorrelationRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_correlation_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCorrelationMatrix') }})
    assets_returns: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    constraints: Optional[PostPortfolioOptimizationMaximumDecorrelationRequestBodyConstraints] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationMaximumDecorrelationRequest:
    request: PostPortfolioOptimizationMaximumDecorrelationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioOptimizationMaximumDecorrelationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_optimization_maximum_decorrelation_200_application_json_object: Optional[PostPortfolioOptimizationMaximumDecorrelation200ApplicationJSON] = dataclasses.field(default=None)
    
