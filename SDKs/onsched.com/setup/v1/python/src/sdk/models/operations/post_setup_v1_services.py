import dataclasses
from typing import Optional
from ..shared import serviceinputmodel as shared_serviceinputmodel
from ..shared import serviceviewmodel as shared_serviceviewmodel


@dataclasses.dataclass
class PostSetupV1ServicesRequests:
    service_input_model: Optional[shared_serviceinputmodel.ServiceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_input_model1: Optional[shared_serviceinputmodel.ServiceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_input_model2: Optional[shared_serviceinputmodel.ServiceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_input_model3: Optional[shared_serviceinputmodel.ServiceInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1ServicesRequest:
    request: Optional[PostSetupV1ServicesRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1ServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_view_model: Optional[shared_serviceviewmodel.ServiceViewModel] = dataclasses.field(default=None)
    
