import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import serviceupdatemodel as shared_serviceupdatemodel
from ..shared import serviceviewmodel as shared_serviceviewmodel


@dataclasses.dataclass
class PutSetupV1ServicesIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ServicesIDRequests:
    service_update_model: Optional[shared_serviceupdatemodel.ServiceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_update_model1: Optional[shared_serviceupdatemodel.ServiceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_update_model2: Optional[shared_serviceupdatemodel.ServiceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_update_model3: Optional[shared_serviceupdatemodel.ServiceUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ServicesIDRequest:
    path_params: PutSetupV1ServicesIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1ServicesIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ServicesIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_view_model: Optional[shared_serviceviewmodel.ServiceViewModel] = dataclasses.field(default=None)
    
