import dataclasses
from typing import Optional
from ..shared import serviceavailabilityviewmodel as shared_serviceavailabilityviewmodel


@dataclasses.dataclass
class GetSetupV1ServicesIDAvailabilityPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1ServicesIDAvailabilityRequest:
    path_params: GetSetupV1ServicesIDAvailabilityPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1ServicesIDAvailabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_availability_view_model: Optional[shared_serviceavailabilityviewmodel.ServiceAvailabilityViewModel] = dataclasses.field(default=None)
    
