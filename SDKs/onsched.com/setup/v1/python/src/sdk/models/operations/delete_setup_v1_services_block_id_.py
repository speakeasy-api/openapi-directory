import dataclasses
from typing import Optional
from ..shared import resourceblockviewmodel as shared_resourceblockviewmodel


@dataclasses.dataclass
class DeleteSetupV1ServicesBlockIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1ServicesBlockIDRequest:
    path_params: DeleteSetupV1ServicesBlockIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1ServicesBlockIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_view_model: Optional[shared_resourceblockviewmodel.ResourceBlockViewModel] = dataclasses.field(default=None)
    
