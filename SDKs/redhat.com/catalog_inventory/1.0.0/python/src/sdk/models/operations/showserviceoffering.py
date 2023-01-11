import dataclasses
from typing import Optional
from ..shared import errornotfound as shared_errornotfound
from ..shared import serviceoffering as shared_serviceoffering


@dataclasses.dataclass
class ShowServiceOfferingPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ShowServiceOfferingRequest:
    path_params: ShowServiceOfferingPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ShowServiceOfferingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_not_found: Optional[shared_errornotfound.ErrorNotFound] = dataclasses.field(default=None)
    service_offering: Optional[shared_serviceoffering.ServiceOffering] = dataclasses.field(default=None)
    
