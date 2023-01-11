import dataclasses
from typing import Optional
from ..shared import vaccinestatusrequest as shared_vaccinestatusrequest
from ..shared import problem as shared_problem
from ..shared import vaccineresponse as shared_vaccineresponse


@dataclasses.dataclass
class GetVaccineStatusHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = dataclasses.field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    cowin_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'cowinApiKey', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetVaccineStatusRequest:
    headers: GetVaccineStatusHeaders = dataclasses.field()
    request: shared_vaccinestatusrequest.VaccineStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetVaccineStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem: Optional[shared_problem.Problem] = dataclasses.field(default=None)
    vaccine_response: Optional[shared_vaccineresponse.VaccineResponse] = dataclasses.field(default=None)
    
