import dataclasses
from typing import Optional
from ..shared import error as shared_error
from ..shared import portfolioactivations as shared_portfolioactivations


@dataclasses.dataclass
class GetOfferingsInfoTextPatternPathParams:
    text_pattern: str = dataclasses.field(metadata={'path_param': { 'field_name': 'textPattern', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOfferingsInfoTextPatternRequest:
    path_params: GetOfferingsInfoTextPatternPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOfferingsInfoTextPatternResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    portfolio_activations: Optional[list[shared_portfolioactivations.PortfolioActivations]] = dataclasses.field(default=None)
    
