import dataclasses
from typing import Optional
from ..shared import employer as shared_employer
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetEmployerRevisionByNumberPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployerRevisionByNumberHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployerRevisionByNumberRequest:
    headers: GetEmployerRevisionByNumberHeaders = dataclasses.field()
    path_params: GetEmployerRevisionByNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployerRevisionByNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employer: Optional[shared_employer.Employer] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
