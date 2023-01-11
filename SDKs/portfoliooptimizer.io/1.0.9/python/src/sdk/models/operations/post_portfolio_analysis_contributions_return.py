import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsReturnRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturns') }})
    portfolios: list[PostPortfolioAnalysisContributionsReturnRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    assets_groups: Optional[list[list[int]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroups') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios:
    assets_return_contributions: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsReturnContributions') }})
    assets_groups_return_contributions: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsGroupsReturnContributions') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisContributionsReturn200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisContributionsReturn200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisContributionsReturnRequest:
    request: PostPortfolioAnalysisContributionsReturnRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisContributionsReturnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_contributions_return_200_application_json_object: Optional[PostPortfolioAnalysisContributionsReturn200ApplicationJSON] = dataclasses.field(default=None)
    
