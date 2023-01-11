import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import site as shared_site


@dataclasses.dataclass
class ExportSitesJSONQueryParams:
    fields: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportSitesJSONSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportSitesJSONRequest:
    query_params: ExportSitesJSONQueryParams = dataclasses.field()
    security: ExportSitesJSONSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportSitesJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    sites: Optional[list[shared_site.Site]] = dataclasses.field(default=None)
    
