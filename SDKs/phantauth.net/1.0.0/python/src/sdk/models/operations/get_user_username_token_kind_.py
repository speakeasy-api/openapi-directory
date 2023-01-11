import dataclasses
from typing import Optional
from enum import Enum

class GetUserUsernameTokenKindKindEnum(str, Enum):
    ACCESS_ = "'access'"
    REFRESH_ = "'refresh'"
    AUTHORIZATION_ = "'authorization'"
    ID_ = "'id'"
    SELFIE_ = "'selfie'"
    PLAIN_ = "'plain'"


@dataclasses.dataclass
class GetUserUsernameTokenKindPathParams:
    kind: GetUserUsernameTokenKindKindEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'kind', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserUsernameTokenKindQueryParams:
    scope: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserUsernameTokenKindRequest:
    path_params: GetUserUsernameTokenKindPathParams = dataclasses.field()
    query_params: GetUserUsernameTokenKindQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserUsernameTokenKindResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
