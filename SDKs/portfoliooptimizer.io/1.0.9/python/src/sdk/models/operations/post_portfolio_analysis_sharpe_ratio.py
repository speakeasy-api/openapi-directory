import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios:
    portfolio_sharpe_ratio: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioSharpeRatio') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisSharpeRatio200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisSharpeRatio200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisSharpeRatioRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisSharpeRatioResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_sharpe_ratio_200_application_json_object: Optional[PostPortfolioAnalysisSharpeRatio200ApplicationJSON] = dataclasses.field(default=None)
    
