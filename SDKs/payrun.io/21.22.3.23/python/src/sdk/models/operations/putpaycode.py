import dataclasses
from typing import Optional
from ..shared import paycode as shared_paycode
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class PutPayCodePathParams:
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPayCodeHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutPayCodeRequest:
    headers: PutPayCodeHeaders = dataclasses.field()
    path_params: PutPayCodePathParams = dataclasses.field()
    request: shared_paycode.PayCode = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutPayCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    pay_code: Optional[shared_paycode.PayCode] = dataclasses.field(default=None)
    
