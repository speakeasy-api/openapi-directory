import dataclasses
from typing import Optional
from ..shared import locationviewmodel as shared_locationviewmodel


@dataclasses.dataclass
class DeleteSetupV1LocationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDRequest:
    path_params: DeleteSetupV1LocationsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1LocationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    location_view_model: Optional[shared_locationviewmodel.LocationViewModel] = dataclasses.field(default=None)
    
