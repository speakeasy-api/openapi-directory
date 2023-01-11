import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeletePayLineTagPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_line_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayLineId', 'style': 'simple', 'explode': False }})
    tag_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePayLineTagHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeletePayLineTagRequest:
    headers: DeletePayLineTagHeaders = dataclasses.field()
    path_params: DeletePayLineTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeletePayLineTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
