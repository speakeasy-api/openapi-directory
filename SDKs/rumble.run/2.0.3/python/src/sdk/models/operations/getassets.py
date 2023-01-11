import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import asset as shared_asset


@dataclasses.dataclass
class GetAssetsQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAssetsSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAssetsRequest:
    query_params: GetAssetsQueryParams = dataclasses.field()
    security: GetAssetsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assets: Optional[list[shared_asset.Asset]] = dataclasses.field(default=None)
    
