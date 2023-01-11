import dataclasses
from typing import Optional
from ..shared import deploy_key as shared_deploy_key


@dataclasses.dataclass
class ReposListDeployKeysPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListDeployKeysQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListDeployKeysRequest:
    path_params: ReposListDeployKeysPathParams = dataclasses.field()
    query_params: ReposListDeployKeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListDeployKeysResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    deploy_keys: Optional[list[shared_deploy_key.DeployKey]] = dataclasses.field(default=None)
    
