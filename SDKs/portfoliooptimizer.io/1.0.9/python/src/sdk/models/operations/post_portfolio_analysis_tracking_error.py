import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios:
    portfolio_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisTrackingErrorRequestBody:
    benchmark_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('benchmarkReturns') }})
    portfolios: list[PostPortfolioAnalysisTrackingErrorRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios:
    portfolio_tracking_error: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioTrackingError') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisTrackingError200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisTrackingError200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisTrackingErrorRequest:
    request: PostPortfolioAnalysisTrackingErrorRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisTrackingErrorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_tracking_error_200_application_json_object: Optional[PostPortfolioAnalysisTrackingError200ApplicationJSON] = dataclasses.field(default=None)
    
