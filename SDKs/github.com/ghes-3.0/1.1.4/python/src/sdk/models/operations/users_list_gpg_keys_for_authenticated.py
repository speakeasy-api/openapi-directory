import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import gpg_key as shared_gpg_key


@dataclasses.dataclass
class UsersListGpgKeysForAuthenticatedQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class UsersListGpgKeysForAuthenticatedRequest:
    query_params: UsersListGpgKeysForAuthenticatedQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersListGpgKeysForAuthenticatedResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    gpg_keys: Optional[list[shared_gpg_key.GpgKey]] = dataclasses.field(default=None)
    
