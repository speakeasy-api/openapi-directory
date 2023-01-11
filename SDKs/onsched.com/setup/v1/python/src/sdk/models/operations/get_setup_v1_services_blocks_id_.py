import dataclasses
from typing import Optional
from ..shared import resourceblockviewmodel as shared_resourceblockviewmodel


@dataclasses.dataclass
class GetSetupV1ServicesBlocksIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ServicesBlocksIDRequest:
    path_params: GetSetupV1ServicesBlocksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ServicesBlocksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_view_model: Optional[shared_resourceblockviewmodel.ResourceBlockViewModel] = dataclasses.field(default=None)
    
