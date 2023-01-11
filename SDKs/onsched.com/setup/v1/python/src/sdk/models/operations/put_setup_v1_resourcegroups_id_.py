import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import resourcegroupupdatemodel as shared_resourcegroupupdatemodel
from ..shared import resourcegroupviewmodel as shared_resourcegroupviewmodel


@dataclasses.dataclass
class PutSetupV1ResourcegroupsIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1ResourcegroupsIDRequests:
    resource_group_update_model: Optional[shared_resourcegroupupdatemodel.ResourceGroupUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_group_update_model1: Optional[shared_resourcegroupupdatemodel.ResourceGroupUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_group_update_model2: Optional[shared_resourcegroupupdatemodel.ResourceGroupUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_group_update_model3: Optional[shared_resourcegroupupdatemodel.ResourceGroupUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1ResourcegroupsIDRequest:
    path_params: PutSetupV1ResourcegroupsIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1ResourcegroupsIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1ResourcegroupsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_group_view_model: Optional[shared_resourcegroupviewmodel.ResourceGroupViewModel] = dataclasses.field(default=None)
    
