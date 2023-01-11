import dataclasses
from typing import Optional
from ..shared import appliedinventoriesparametersserviceplan as shared_appliedinventoriesparametersserviceplan
from ..shared import tag as shared_tag


@dataclasses.dataclass
class AppliedInventoriesTagsForServiceOfferingPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AppliedInventoriesTagsForServiceOfferingRequest:
    path_params: AppliedInventoriesTagsForServiceOfferingPathParams = dataclasses.field()
    request: shared_appliedinventoriesparametersserviceplan.AppliedInventoriesParametersServicePlan = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AppliedInventoriesTagsForServiceOfferingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None)
    
