import dataclasses
from typing import Optional
from ..shared import usergroup as shared_usergroup


@dataclasses.dataclass
class SaveCorporateUserGroupByIDPathParams:
    corporate_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'corporateId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SaveCorporateUserGroupByIDRequest:
    path_params: SaveCorporateUserGroupByIDPathParams = dataclasses.field()
    request: shared_usergroup.UserGroup = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SaveCorporateUserGroupByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_group: Optional[shared_usergroup.UserGroup] = dataclasses.field(default=None)
    
