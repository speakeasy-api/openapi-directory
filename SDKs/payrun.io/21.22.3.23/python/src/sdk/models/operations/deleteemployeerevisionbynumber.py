import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeleteEmployeeRevisionByNumberPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEmployeeRevisionByNumberHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEmployeeRevisionByNumberRequest:
    headers: DeleteEmployeeRevisionByNumberHeaders = dataclasses.field()
    path_params: DeleteEmployeeRevisionByNumberPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteEmployeeRevisionByNumberResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
