import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import serviceallocationupdatemodel as shared_serviceallocationupdatemodel
from ..shared import serviceallocationviewmodel as shared_serviceallocationviewmodel


@dataclasses.dataclass
class PutSetupV1ServicesAllocationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ServicesAllocationsIDRequests:
    service_allocation_update_model: Optional[shared_serviceallocationupdatemodel.ServiceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_allocation_update_model1: Optional[shared_serviceallocationupdatemodel.ServiceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_allocation_update_model2: Optional[shared_serviceallocationupdatemodel.ServiceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_allocation_update_model3: Optional[shared_serviceallocationupdatemodel.ServiceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ServicesAllocationsIDRequest:
    path_params: PutSetupV1ServicesAllocationsIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1ServicesAllocationsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ServicesAllocationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    service_allocation_view_model: Optional[shared_serviceallocationviewmodel.ServiceAllocationViewModel] = dataclasses.field(default=None)
    
