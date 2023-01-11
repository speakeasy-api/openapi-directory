import dataclasses
from typing import Optional
from ..shared import employer as shared_employer
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PatchEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchEmployerRequest:
    headers: PatchEmployerHeaders = dataclasses.field()
    path_params: PatchEmployerPathParams = dataclasses.field()
    request: shared_employer.Employer = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PatchEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employer: Optional[shared_employer.Employer] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
