import dataclasses
from typing import Optional
from ..shared import retrievedistributionlinksresponse as shared_retrievedistributionlinksresponse


@dataclasses.dataclass
class RetrievedistributionlinksPathParams:
    distribution_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DistributionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetrievedistributionlinksQueryParams:
    survey_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'surveyId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrievedistributionlinksRequest:
    path_params: RetrievedistributionlinksPathParams = dataclasses.field()
    query_params: RetrievedistributionlinksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrievedistributionlinksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    retrieve_distribution_links_response: Optional[shared_retrievedistributionlinksresponse.RetrieveDistributionLinksResponse] = dataclasses.field(default=None)
    
