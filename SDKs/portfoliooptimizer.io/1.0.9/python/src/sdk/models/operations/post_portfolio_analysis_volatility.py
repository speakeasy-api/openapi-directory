import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios:
    portfolio_volatility: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioVolatility') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisVolatility200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisVolatility200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisVolatilityRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisVolatilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_volatility_200_application_json_object: Optional[PostPortfolioAnalysisVolatility200ApplicationJSON] = dataclasses.field(default=None)
    
