import dataclasses
from typing import Optional
from ..shared import errormodel as shared_errormodel


@dataclasses.dataclass
class DeleteDpsMessagePathParams:
    dps_message_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'DpsMessageId', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDpsMessageHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDpsMessageRequest:
    headers: DeleteDpsMessageHeaders = dataclasses.field()
    path_params: DeleteDpsMessagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDpsMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    
