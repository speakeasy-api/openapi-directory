import dataclasses
from typing import Optional
from ..shared import operationstatus as shared_operationstatus


@dataclasses.dataclass
class DeleteCachePathParams:
    key: str = dataclasses.field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteCacheRequest:
    path_params: DeleteCachePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteCacheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operation_status: Optional[shared_operationstatus.OperationStatus] = dataclasses.field(default=None)
    
