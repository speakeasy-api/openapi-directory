import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import asset as shared_asset


@dataclasses.dataclass
class GetAssetPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAssetRequest:
    path_params: GetAssetPathParams = dataclasses.field()
    security: GetAssetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset: Optional[shared_asset.Asset] = dataclasses.field(default=None)
    
