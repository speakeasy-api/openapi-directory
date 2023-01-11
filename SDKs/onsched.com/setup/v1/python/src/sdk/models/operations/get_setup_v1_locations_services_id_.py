import dataclasses
from typing import Optional
from ..shared import businessserviceviewmodel as shared_businessserviceviewmodel


@dataclasses.dataclass
class GetSetupV1LocationsServicesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1LocationsServicesIDRequest:
    path_params: GetSetupV1LocationsServicesIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1LocationsServicesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    business_service_view_model: Optional[shared_businessserviceviewmodel.BusinessServiceViewModel] = dataclasses.field(default=None)
    
