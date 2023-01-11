import dataclasses
from typing import Optional
from ..shared import resourceviewmodel as shared_resourceviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcegroupsIDRecoverPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcegroupsIDRecoverRequest:
    path_params: PutSetupV1ResourcegroupsIDRecoverPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PutSetupV1ResourcegroupsIDRecoverResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_view_model: Optional[shared_resourceviewmodel.ResourceViewModel] = dataclasses.field(default=None)
    
