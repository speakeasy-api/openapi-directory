import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assetresponse as shared_assetresponse


@dataclasses.dataclass
class GetAssetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAssetSecurity:
    developer_key: shared_security.SchemeDeveloperKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetAssetRequest:
    path_params: GetAssetPathParams = dataclasses.field()
    security: GetAssetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_response: Optional[shared_assetresponse.AssetResponse] = dataclasses.field(default=None)
    
