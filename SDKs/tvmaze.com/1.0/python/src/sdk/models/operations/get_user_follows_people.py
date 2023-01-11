import dataclasses
from typing import Optional
from enum import Enum
from ..shared import personfollow as shared_personfollow

class GetUserFollowsPeopleEmbedEnum(str, Enum):
    PERSON = "person"


@dataclasses.dataclass
class GetUserFollowsPeopleQueryParams:
    embed: Optional[GetUserFollowsPeopleEmbedEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'embed', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserFollowsPeopleRequest:
    query_params: GetUserFollowsPeopleQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserFollowsPeopleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    person_follows: Optional[list[shared_personfollow.PersonFollow]] = dataclasses.field(default=None)
    
