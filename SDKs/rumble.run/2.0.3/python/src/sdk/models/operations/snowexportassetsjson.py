import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import assetservicenow as shared_assetservicenow


@dataclasses.dataclass
class SnowExportAssetsJSONSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class SnowExportAssetsJSONRequest:
    security: SnowExportAssetsJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SnowExportAssetsJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    asset_service_nows: Optional[list[shared_assetservicenow.AssetServiceNow]] = dataclasses.field(default=None)
    
