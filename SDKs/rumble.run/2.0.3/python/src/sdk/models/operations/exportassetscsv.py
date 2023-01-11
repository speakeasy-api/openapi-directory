import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ExportAssetsCsvQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportAssetsCsvSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportAssetsCsvRequest:
    query_params: ExportAssetsCsvQueryParams = dataclasses.field()
    security: ExportAssetsCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportAssetsCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_assets_csv_200_text_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
