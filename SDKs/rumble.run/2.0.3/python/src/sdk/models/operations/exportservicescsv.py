import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ExportServicesCsvQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportServicesCsvSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportServicesCsvRequest:
    query_params: ExportServicesCsvQueryParams = dataclasses.field()
    security: ExportServicesCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportServicesCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_services_csv_200_text_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
