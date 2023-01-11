import dataclasses
from typing import Optional
from ..shared import availabilityinputmodel as shared_availabilityinputmodel
from ..shared import serviceavailabilityviewmodel as shared_serviceavailabilityviewmodel


@dataclasses.dataclass
class PutSetupV1ServicesIDAvailabilityPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ServicesIDAvailabilityRequests:
    availability_input_model: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    availability_input_model1: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    availability_input_model2: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    availability_input_model3: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ServicesIDAvailabilityRequest:
    path_params: PutSetupV1ServicesIDAvailabilityPathParams = dataclasses.field()
    request: Optional[PutSetupV1ServicesIDAvailabilityRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ServicesIDAvailabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_availability_view_model: Optional[shared_serviceavailabilityviewmodel.ServiceAvailabilityViewModel] = dataclasses.field(default=None)
    
