import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ExportAssetsCiscoCsvQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportAssetsCiscoCsvSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportAssetsCiscoCsvRequest:
    query_params: ExportAssetsCiscoCsvQueryParams = dataclasses.field()
    security: ExportAssetsCiscoCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportAssetsCiscoCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_assets_cisco_csv_200_text_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
