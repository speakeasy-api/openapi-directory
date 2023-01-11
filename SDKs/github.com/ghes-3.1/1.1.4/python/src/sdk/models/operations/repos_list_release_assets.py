import dataclasses
from typing import Optional
from ..shared import release_asset as shared_release_asset


@dataclasses.dataclass
class ReposListReleaseAssetsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    release_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'release_id', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListReleaseAssetsQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListReleaseAssetsRequest:
    path_params: ReposListReleaseAssetsPathParams = dataclasses.field()
    query_params: ReposListReleaseAssetsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListReleaseAssetsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    release_assets: Optional[list[shared_release_asset.ReleaseAsset]] = dataclasses.field(default=None)
    
