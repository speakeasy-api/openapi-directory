import dataclasses
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteAssetPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAssetSecurity:
    developer_key: shared_security.SchemeDeveloperKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteAssetRequest:
    path_params: DeleteAssetPathParams = dataclasses.field()
    security: DeleteAssetSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAssetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
