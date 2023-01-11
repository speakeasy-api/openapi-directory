import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class SnowExportAssetsCsvSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class SnowExportAssetsCsvRequest:
    security: SnowExportAssetsCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SnowExportAssetsCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    snow_export_assets_csv_200_text_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
