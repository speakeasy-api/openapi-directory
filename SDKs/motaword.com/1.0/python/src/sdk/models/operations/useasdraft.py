import dataclasses
from typing import Optional
from ..shared import useasdraftpayload as shared_useasdraftpayload
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class UseAsDraftPathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UseAsDraftRequest:
    path_params: UseAsDraftPathParams = dataclasses.field()
    request: Optional[shared_useasdraftpayload.UseAsDraftPayload] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UseAsDraftResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
