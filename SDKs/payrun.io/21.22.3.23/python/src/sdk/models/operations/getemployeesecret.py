import dataclasses
from typing import Optional
from ..shared import employeesecret as shared_employeesecret
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetEmployeeSecretPathParams:
    employee_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    secret_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SecretId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeSecretHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmployeeSecretRequest:
    headers: GetEmployeeSecretHeaders = dataclasses.field()
    path_params: GetEmployeeSecretPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmployeeSecretResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    employee_secret: Optional[shared_employeesecret.EmployeeSecret] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
