import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import serviceofferingnode as shared_serviceofferingnode


@dataclasses.dataclass
class ShowServiceOfferingNodePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowServiceOfferingNodeRequest:
    path_params: ShowServiceOfferingNodePathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowServiceOfferingNodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_offering_node: Optional[shared_serviceofferingnode.ServiceOfferingNode] = dataclasses.field(default=None)
    
