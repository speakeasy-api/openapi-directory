import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios:
    assets_weights: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDiversificationRatioRequestBody:
    assets: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: list[list[float]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    portfolios: list[PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios:
    portfolio_diversification_ratio: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioDiversificationRatio') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDiversificationRatio200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisDiversificationRatioRequest:
    request: PostPortfolioAnalysisDiversificationRatioRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisDiversificationRatioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_diversification_ratio_200_application_json_object: Optional[PostPortfolioAnalysisDiversificationRatio200ApplicationJSON] = dataclasses.field(default=None)
    
