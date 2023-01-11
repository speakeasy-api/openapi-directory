import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDrawdownsRequestBodyPortfolios:
    portfolio_values: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioValues') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDrawdownsRequestBody:
    portfolios: list[PostPortfolioAnalysisDrawdownsRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns:
    drawdown_bottom: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownBottom') }})
    drawdown_depth: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownDepth') }})
    drawdown_end: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownEnd') }})
    drawdown_start: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drawdownStart') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios:
    portfolio_drawdowns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioDrawdowns') }})
    portfolio_worst_drawdowns: list[PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfoliosPortfolioWorstDrawdowns] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioWorstDrawdowns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisDrawdowns200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisDrawdowns200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisDrawdownsRequest:
    request: PostPortfolioAnalysisDrawdownsRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisDrawdownsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_drawdowns_200_application_json_object: Optional[PostPortfolioAnalysisDrawdowns200ApplicationJSON] = dataclasses.field(default=None)
    
