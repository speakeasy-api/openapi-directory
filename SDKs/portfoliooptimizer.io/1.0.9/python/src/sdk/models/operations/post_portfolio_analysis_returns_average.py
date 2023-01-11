import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios:
    portfolio_values: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisReturnsAverageRequestBody:
    portfolios: list[PostPortfolioAnalysisReturnsAverageRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios:
    portfolio_average_return: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioAverageReturn') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisReturnsAverage200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisReturnsAverage200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisReturnsAverageRequest:
    request: PostPortfolioAnalysisReturnsAverageRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisReturnsAverageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_returns_average_200_application_json_object: Optional[PostPortfolioAnalysisReturnsAverage200ApplicationJSON] = dataclasses.field(default=None)
    
