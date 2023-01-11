import dataclasses
from typing import Optional
from ..shared import dpsmessage as shared_dpsmessage
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class GetDpsMessageFromEmployerPathParams:
    dps_message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DpsMessageId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDpsMessageFromEmployerHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDpsMessageFromEmployerRequest:
    headers: GetDpsMessageFromEmployerHeaders = dataclasses.field()
    path_params: GetDpsMessageFromEmployerPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDpsMessageFromEmployerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    dps_message: Optional[shared_dpsmessage.DpsMessage] = dataclasses.field(default=None)
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
