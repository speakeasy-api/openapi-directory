import dataclasses
from typing import Optional
from ..shared import serviceviewmodel as shared_serviceviewmodel


@dataclasses.dataclass
class DeleteSetupV1ServicesIDDeleteimagePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSetupV1ServicesIDDeleteimageRequest:
    path_params: DeleteSetupV1ServicesIDDeleteimagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSetupV1ServicesIDDeleteimageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_view_model: Optional[shared_serviceviewmodel.ServiceViewModel] = dataclasses.field(default=None)
    
