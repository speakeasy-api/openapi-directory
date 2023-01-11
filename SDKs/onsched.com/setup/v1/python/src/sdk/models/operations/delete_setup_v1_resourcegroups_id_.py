import dataclasses
from typing import Optional
from ..shared import resourcegroupviewmodel as shared_resourcegroupviewmodel


@dataclasses.dataclass
class DeleteSetupV1ResourcegroupsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1ResourcegroupsIDRequest:
    path_params: DeleteSetupV1ResourcegroupsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1ResourcegroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_group_view_model: Optional[shared_resourcegroupviewmodel.ResourceGroupViewModel] = dataclasses.field(default=None)
    
