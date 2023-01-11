import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import resourceblockupdatemodel as shared_resourceblockupdatemodel
from ..shared import resourceblockviewmodel as shared_resourceblockviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcesBlockIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesBlockIDRequests:
    resource_block_update_model: Optional[shared_resourceblockupdatemodel.ResourceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_block_update_model1: Optional[shared_resourceblockupdatemodel.ResourceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_block_update_model2: Optional[shared_resourceblockupdatemodel.ResourceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_block_update_model3: Optional[shared_resourceblockupdatemodel.ResourceBlockUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ResourcesBlockIDRequest:
    path_params: PutSetupV1ResourcesBlockIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1ResourcesBlockIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ResourcesBlockIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_block_view_model: Optional[shared_resourceblockviewmodel.ResourceBlockViewModel] = dataclasses.field(default=None)
    
