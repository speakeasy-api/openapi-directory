import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisReturn200ApplicationJSONPortfolios:
    portfolio_return: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturn') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisReturn200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisReturn200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisReturnRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisReturnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_return_200_application_json_object: Optional[PostPortfolioAnalysisReturn200ApplicationJSON] = dataclasses.field(default=None)
    
