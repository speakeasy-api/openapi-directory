import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class SnowExportServicesCsvSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class SnowExportServicesCsvRequest:
    security: SnowExportServicesCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SnowExportServicesCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    snow_export_services_csv_200_text_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
