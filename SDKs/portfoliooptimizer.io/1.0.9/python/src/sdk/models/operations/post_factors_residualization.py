import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostFactorsResidualizationRequestBodyFactors:
    factor_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factorReturns') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFactorsResidualizationRequestBody:
    factors: list[PostFactorsResidualizationRequestBodyFactors] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factors') }})
    residualized_factor: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('residualizedFactor') }})
    

@dataclass_json
@dataclasses.dataclass
class PostFactorsResidualization200ApplicationJSON:
    residualized_factor_returns: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('residualizedFactorReturns') }})
    

@dataclasses.dataclass
class PostFactorsResidualizationRequest:
    request: PostFactorsResidualizationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostFactorsResidualizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_factors_residualization_200_application_json_object: Optional[PostFactorsResidualization200ApplicationJSON] = dataclasses.field(default=None)
    
