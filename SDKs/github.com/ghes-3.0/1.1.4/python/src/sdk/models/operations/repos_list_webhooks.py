import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import hook as shared_hook


@dataclasses.dataclass
class ReposListWebhooksPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListWebhooksQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListWebhooksRequest:
    path_params: ReposListWebhooksPathParams = dataclasses.field()
    query_params: ReposListWebhooksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListWebhooksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    hooks: Optional[list[shared_hook.Hook]] = dataclasses.field(default=None)
    
