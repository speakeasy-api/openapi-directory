import dataclasses
from typing import Optional
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class DeleteSetupV1LocationsIDServicesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDServicesRequest:
    path_params: DeleteSetupV1LocationsIDServicesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
