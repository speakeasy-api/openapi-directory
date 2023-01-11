import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import paycode as shared_paycode


@dataclasses.dataclass
class GetPayCodeFromEmployerPathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayCodeFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayCodeFromEmployerRequest:
    headers: GetPayCodeFromEmployerHeaders = dataclasses.field()
    path_params: GetPayCodeFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayCodeFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pay_code: Optional[shared_paycode.PayCode] = dataclasses.field(default=None)
    
