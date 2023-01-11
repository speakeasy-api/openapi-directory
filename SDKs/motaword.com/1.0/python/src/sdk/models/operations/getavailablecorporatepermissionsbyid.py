import dataclasses
from typing import Optional
from ..shared import permissionlist as shared_permissionlist


@dataclasses.dataclass
class GetAvailableCorporatePermissionsByIDPathParams:
    corporate_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'corporateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAvailableCorporatePermissionsByIDRequest:
    path_params: GetAvailableCorporatePermissionsByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAvailableCorporatePermissionsByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_list: Optional[shared_permissionlist.PermissionList] = dataclasses.field(default=None)
    
