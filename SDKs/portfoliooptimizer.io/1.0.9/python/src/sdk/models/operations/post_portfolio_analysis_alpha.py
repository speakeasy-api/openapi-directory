import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios:
    portfolio_alpha: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioAlpha') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisAlpha200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisAlpha200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisAlphaRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisAlphaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_alpha_200_application_json_object: Optional[PostPortfolioAnalysisAlpha200ApplicationJSON] = dataclasses.field(default=None)
    
