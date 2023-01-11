import dataclasses
from typing import Optional
from ..shared import businessuserviewmodel as shared_businessuserviewmodel


@dataclasses.dataclass
class GetSetupV1BusinessusersIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetupV1BusinessusersIDRequest:
    path_params: GetSetupV1BusinessusersIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetupV1BusinessusersIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    business_user_view_model: Optional[shared_businessuserviewmodel.BusinessUserViewModel] = dataclasses.field(default=None)
    
