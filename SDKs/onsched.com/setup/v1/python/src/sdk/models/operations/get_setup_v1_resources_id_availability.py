import dataclasses
from typing import Optional
from ..shared import resourceavailabilityviewmodel as shared_resourceavailabilityviewmodel


@dataclasses.dataclass
class GetSetupV1ResourcesIDAvailabilityPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDAvailabilityRequest:
    path_params: GetSetupV1ResourcesIDAvailabilityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ResourcesIDAvailabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_availability_view_model: Optional[shared_resourceavailabilityviewmodel.ResourceAvailabilityViewModel] = dataclasses.field(default=None)
    
