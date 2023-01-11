import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsRiskRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    portfolios: list[PostPortfolioAnalysisContributionsRiskRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    assets_groups: Optional[list[list[int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios:
    assets_risk_contributions: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsRiskContributions') }})
    assets_groups_risk_contributions: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsRiskContributions') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsRisk200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisContributionsRisk200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisContributionsRiskRequest:
    request: PostPortfolioAnalysisContributionsRiskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisContributionsRiskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_contributions_risk_200_application_json_object: Optional[PostPortfolioAnalysisContributionsRisk200ApplicationJSON] = dataclasses.field(default=None)
    
