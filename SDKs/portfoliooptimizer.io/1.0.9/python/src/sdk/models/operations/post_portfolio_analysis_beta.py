import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisBeta200ApplicationJSONPortfolios:
    portfolio_beta: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioBeta') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisBeta200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisBeta200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisBetaRequest:
    request: dict[str, Any] = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisBetaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_beta_200_application_json_object: Optional[PostPortfolioAnalysisBeta200ApplicationJSON] = dataclasses.field(default=None)
    
