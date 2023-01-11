import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class RemoveAssetPathParams:
    asset_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveAssetSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class RemoveAssetRequest:
    path_params: RemoveAssetPathParams = dataclasses.field()
    security: RemoveAssetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
