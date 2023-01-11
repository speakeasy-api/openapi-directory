import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import asset as shared_asset


@dataclasses.dataclass
class ExportAssetsJSONQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportAssetsJSONSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportAssetsJSONRequest:
    query_params: ExportAssetsJSONQueryParams = dataclasses.field()
    security: ExportAssetsJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportAssetsJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    assets: Optional[list[shared_asset.Asset]] = dataclasses.field(default=None)
    
