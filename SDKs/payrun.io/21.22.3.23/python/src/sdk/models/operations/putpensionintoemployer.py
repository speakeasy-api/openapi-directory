import dataclasses
from typing import Optional
from ..shared import pension as shared_pension
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutPensionIntoEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pension_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PensionId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPensionIntoEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPensionIntoEmployerRequest:
    headers: PutPensionIntoEmployerHeaders = dataclasses.field()
    path_params: PutPensionIntoEmployerPathParams = dataclasses.field()
    request: shared_pension.Pension = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutPensionIntoEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pension: Optional[shared_pension.Pension] = dataclasses.field(default=None)
    
