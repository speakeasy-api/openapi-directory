import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ExportSitesJsonlQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportSitesJsonlSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportSitesJsonlRequest:
    query_params: ExportSitesJsonlQueryParams = dataclasses.field()
    security: ExportSitesJsonlSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportSitesJsonlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_sites_jsonl_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
