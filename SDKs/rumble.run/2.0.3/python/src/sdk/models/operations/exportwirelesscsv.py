import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ExportWirelessCsvQueryParams:
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ExportWirelessCsvSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class ExportWirelessCsvRequest:
    query_params: ExportWirelessCsvQueryParams = dataclasses.field()
    security: ExportWirelessCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ExportWirelessCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    export_wireless_csv_200_text_csv_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
