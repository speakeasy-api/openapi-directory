import dataclasses
from typing import Optional
from ..shared import businessuserinputmodel as shared_businessuserinputmodel
from ..shared import businessuserviewmodel as shared_businessuserviewmodel


@dataclasses.dataclass
class PostSetupV1BusinessusersRequests:
    business_user_input_model: Optional[shared_businessuserinputmodel.BusinessUserInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    business_user_input_model1: Optional[shared_businessuserinputmodel.BusinessUserInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    business_user_input_model2: Optional[shared_businessuserinputmodel.BusinessUserInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    business_user_input_model3: Optional[shared_businessuserinputmodel.BusinessUserInputModel] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostSetupV1BusinessusersRequest:
    request: Optional[PostSetupV1BusinessusersRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSetupV1BusinessusersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    business_user_view_model: Optional[shared_businessuserviewmodel.BusinessUserViewModel] = dataclasses.field(default=None)
    
