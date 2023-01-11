import dataclasses
from typing import Optional
from enum import Enum
from ..shared import alt_enum as shared_alt_enum
from ..shared import account as shared_account


@dataclasses.dataclass
class MirrorAccountsInsertPathParams:
    account_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountName', 'style': 'simple', 'explode': False }})
    account_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accountType', 'style': 'simple', 'explode': False }})
    user_token: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userToken', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class MirrorAccountsInsertQueryParams:
    alt: Optional[shared_alt_enum.AltEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'alt', 'style': 'form', 'explode': True }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    oauth_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'oauth_token', 'style': 'form', 'explode': True }})
    pretty_print: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prettyPrint', 'style': 'form', 'explode': True }})
    quota_user: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'quotaUser', 'style': 'form', 'explode': True }})
    user_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userIp', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class MirrorAccountsInsertRequest:
    path_params: MirrorAccountsInsertPathParams = dataclasses.field()
    query_params: MirrorAccountsInsertQueryParams = dataclasses.field()
    request: Optional[shared_account.Account] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MirrorAccountsInsertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
