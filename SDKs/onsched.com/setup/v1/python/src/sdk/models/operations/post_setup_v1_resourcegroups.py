import dataclasses
from typing import Optional
from ..shared import resourcegroupinputmodel as shared_resourcegroupinputmodel
from ..shared import resourcegroupviewmodel as shared_resourcegroupviewmodel


@dataclasses.dataclass
class PostSetupV1ResourcegroupsRequests:
    resource_group_input_model: Optional[shared_resourcegroupinputmodel.ResourceGroupInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_group_input_model1: Optional[shared_resourcegroupinputmodel.ResourceGroupInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_group_input_model2: Optional[shared_resourcegroupinputmodel.ResourceGroupInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_group_input_model3: Optional[shared_resourcegroupinputmodel.ResourceGroupInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ResourcegroupsRequest:
    request: Optional[PostSetupV1ResourcegroupsRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ResourcegroupsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_group_view_model: Optional[shared_resourcegroupviewmodel.ResourceGroupViewModel] = dataclasses.field(default=None)
    
