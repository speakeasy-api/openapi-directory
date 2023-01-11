import dataclasses
from typing import Optional
from ..shared import personfollow as shared_personfollow


@dataclasses.dataclass
class GetUserFollowsPeoplePersonIDPathParams:
    person_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'person_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserFollowsPeoplePersonIDRequest:
    path_params: GetUserFollowsPeoplePersonIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserFollowsPeoplePersonIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    person_follow: Optional[shared_personfollow.PersonFollow] = dataclasses.field(default=None)
    
