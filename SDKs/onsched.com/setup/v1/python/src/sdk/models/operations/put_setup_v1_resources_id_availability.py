import dataclasses
from typing import Optional
from ..shared import availabilityinputmodel as shared_availabilityinputmodel
from ..shared import resourceavailabilityviewmodel as shared_resourceavailabilityviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcesIDAvailabilityPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDAvailabilityRequests:
    availability_input_model: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    availability_input_model1: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    availability_input_model2: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    availability_input_model3: Optional[shared_availabilityinputmodel.AvailabilityInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDAvailabilityRequest:
    path_params: PutSetupV1ResourcesIDAvailabilityPathParams = dataclasses.field()
    request: Optional[PutSetupV1ResourcesIDAvailabilityRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ResourcesIDAvailabilityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_availability_view_model: Optional[shared_resourceavailabilityviewmodel.ResourceAvailabilityViewModel] = dataclasses.field(default=None)
    
