import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GetAccessTokensAccessTokensInvalidatePathParams:
    access_tokens: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accessTokens', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAccessTokensAccessTokensInvalidateQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAccessTokensAccessTokensInvalidateRequest:
    path_params: GetAccessTokensAccessTokensInvalidatePathParams = dataclasses.field()
    query_params: GetAccessTokensAccessTokensInvalidateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAccessTokensAccessTokensInvalidateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
