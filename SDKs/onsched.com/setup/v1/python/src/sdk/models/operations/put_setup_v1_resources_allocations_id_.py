import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import resourceallocationupdatemodel as shared_resourceallocationupdatemodel
from ..shared import resourceblockviewmodel as shared_resourceblockviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcesAllocationsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesAllocationsIDRequests:
    resource_allocation_update_model: Optional[shared_resourceallocationupdatemodel.ResourceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_allocation_update_model1: Optional[shared_resourceallocationupdatemodel.ResourceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_allocation_update_model2: Optional[shared_resourceallocationupdatemodel.ResourceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_allocation_update_model3: Optional[shared_resourceallocationupdatemodel.ResourceAllocationUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesAllocationsIDRequest:
    path_params: PutSetupV1ResourcesAllocationsIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1ResourcesAllocationsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ResourcesAllocationsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_view_model: Optional[shared_resourceblockviewmodel.ResourceBlockViewModel] = dataclasses.field(default=None)
    
