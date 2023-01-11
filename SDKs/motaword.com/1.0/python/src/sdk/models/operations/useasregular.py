import dataclasses
from typing import Optional
from ..shared import useasregularpayload as shared_useasregularpayload
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class UseAsRegularPathParams:
    document_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'documentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UseAsRegularRequest:
    path_params: UseAsRegularPathParams = dataclasses.field()
    request: Optional[shared_useasregularpayload.UseAsRegularPayload] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UseAsRegularResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
