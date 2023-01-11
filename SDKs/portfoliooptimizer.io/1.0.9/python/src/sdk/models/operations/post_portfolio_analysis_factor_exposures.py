import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisFactorExposuresRequestBodyFactors:
    factor_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factorReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios:
    portfolio_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisFactorExposuresRequestBody:
    portfolios: list[PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    factors: Optional[list[PostPortfolioAnalysisFactorExposuresRequestBodyFactors]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('factors') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios:
    portfolio_alpha: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioAlpha') }})
    portfolio_betas: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioBetas') }})
    portfolio_r_squared: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioRSquared') }})
    

@dataclass_json
@dataclasses.dataclass
class PostPortfolioAnalysisFactorExposures200ApplicationJSON:
    portfolios: list[PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisFactorExposuresRequest:
    request: PostPortfolioAnalysisFactorExposuresRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostPortfolioAnalysisFactorExposuresResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_portfolio_analysis_factor_exposures_200_application_json_object: Optional[PostPortfolioAnalysisFactorExposures200ApplicationJSON] = dataclasses.field(default=None)
    
