import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import businessuserupdatemodel as shared_businessuserupdatemodel
from ..shared import businessuserviewmodel as shared_businessuserviewmodel


@dataclasses.dataclass
class PutSetupV1BusinessusersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutSetupV1BusinessusersIDRequests:
    business_user_update_model: Optional[shared_businessuserupdatemodel.BusinessUserUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    business_user_update_model1: Optional[shared_businessuserupdatemodel.BusinessUserUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    business_user_update_model2: Optional[shared_businessuserupdatemodel.BusinessUserUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    business_user_update_model3: Optional[shared_businessuserupdatemodel.BusinessUserUpdateModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PutSetupV1BusinessusersIDRequest:
    path_params: PutSetupV1BusinessusersIDPathParams = dataclasses.field()
    request: Optional[PutSetupV1BusinessusersIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSetupV1BusinessusersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    business_user_view_model: Optional[shared_businessuserviewmodel.BusinessUserViewModel] = dataclasses.field(default=None)
    
