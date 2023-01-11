import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import pension as shared_pension


@dataclasses.dataclass
class GetPensionFromEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pension_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PensionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPensionFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPensionFromEmployerRequest:
    headers: GetPensionFromEmployerHeaders = dataclasses.field()
    path_params: GetPensionFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPensionFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pension: Optional[shared_pension.Pension] = dataclasses.field(default=None)
    
