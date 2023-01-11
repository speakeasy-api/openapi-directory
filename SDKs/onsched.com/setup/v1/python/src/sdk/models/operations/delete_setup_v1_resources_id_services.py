import dataclasses
from typing import Optional
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class DeleteSetupV1ResourcesIDServicesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1ResourcesIDServicesRequest:
    path_params: DeleteSetupV1ResourcesIDServicesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1ResourcesIDServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
