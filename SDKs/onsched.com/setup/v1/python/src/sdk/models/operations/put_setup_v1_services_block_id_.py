import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import serviceblockupdatemodel as shared_serviceblockupdatemodel
from ..shared import serviceblockviewmodel as shared_serviceblockviewmodel


@dataclasses.dataclass
class PutSetupV1ServicesBlockIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ServicesBlockIDRequests:
    service_block_update_model: Optional[shared_serviceblockupdatemodel.ServiceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_block_update_model1: Optional[shared_serviceblockupdatemodel.ServiceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_block_update_model2: Optional[shared_serviceblockupdatemodel.ServiceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_block_update_model3: Optional[shared_serviceblockupdatemodel.ServiceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ServicesBlockIDRequest:
    path_params: PutSetupV1ServicesBlockIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1ServicesBlockIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ServicesBlockIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_block_view_model: Optional[shared_serviceblockviewmodel.ServiceBlockViewModel] = dataclasses.field(default=None)
    
