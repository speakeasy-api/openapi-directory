import dataclasses
from typing import Optional
from ..shared import serviceblockinputmodel as shared_serviceblockinputmodel
from ..shared import serviceblockviewmodel as shared_serviceblockviewmodel


@dataclasses.dataclass
class PostSetupV1ServicesIDBlockPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDBlockRequests:
    service_block_input_model: Optional[shared_serviceblockinputmodel.ServiceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_block_input_model1: Optional[shared_serviceblockinputmodel.ServiceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_block_input_model2: Optional[shared_serviceblockinputmodel.ServiceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_block_input_model3: Optional[shared_serviceblockinputmodel.ServiceBlockInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ServicesIDBlockRequest:
    path_params: PostSetupV1ServicesIDBlockPathParams = dataclasses.field()
    request: Optional[PostSetupV1ServicesIDBlockRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ServicesIDBlockResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_block_view_model: Optional[shared_serviceblockviewmodel.ServiceBlockViewModel] = dataclasses.field(default=None)
    
