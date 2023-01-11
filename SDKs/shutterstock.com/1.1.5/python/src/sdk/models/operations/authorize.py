import dataclasses
from typing import Optional
from enum import Enum

class AuthorizeRealmEnum(str, Enum):
    CUSTOMER = "customer"
    CONTRIBUTOR = "contributor"

class AuthorizeResponseTypeEnum(str, Enum):
    CODE = "code"


@dataclasses.dataclass
class AuthorizeQueryParams:
    client_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    redirect_uri: str = dataclasses.field(metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    response_type: AuthorizeResponseTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'response_type', 'style': 'form', 'explode': True }})
    state: str = dataclasses.field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    realm: Optional[AuthorizeRealmEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'realm', 'style': 'form', 'explode': True }})
    scope: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AuthorizeRequest:
    query_params: AuthorizeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AuthorizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
