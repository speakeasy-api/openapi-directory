import dataclasses
from typing import Optional
from ..shared import distributionsresponse as shared_distributionsresponse


@dataclasses.dataclass
class GetDistributionsQueryParams:
    survey_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'surveyId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDistributionsRequest:
    query_params: GetDistributionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDistributionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    distributions_response: Optional[shared_distributionsresponse.DistributionsResponse] = dataclasses.field(default=None)
    
