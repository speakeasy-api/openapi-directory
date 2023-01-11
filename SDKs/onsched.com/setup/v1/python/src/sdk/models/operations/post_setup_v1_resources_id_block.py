import dataclasses
from typing import Optional
from ..shared import resourceblockinputmodel as shared_resourceblockinputmodel
from ..shared import resourceblockviewmodel as shared_resourceblockviewmodel


@dataclasses.dataclass
class PostSetupV1ResourcesIDBlockPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDBlockRequests:
    resource_block_input_model: Optional[shared_resourceblockinputmodel.ResourceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_block_input_model1: Optional[shared_resourceblockinputmodel.ResourceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_block_input_model2: Optional[shared_resourceblockinputmodel.ResourceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_block_input_model3: Optional[shared_resourceblockinputmodel.ResourceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDBlockRequest:
    path_params: PostSetupV1ResourcesIDBlockPathParams = dataclasses.field()
    request: Optional[PostSetupV1ResourcesIDBlockRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ResourcesIDBlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_view_model: Optional[shared_resourceblockviewmodel.ResourceBlockViewModel] = dataclasses.field(default=None)
    
