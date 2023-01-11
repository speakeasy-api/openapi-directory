import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DownloadReportPathParams:
    file_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadReportSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DownloadReportRequest:
    path_params: DownloadReportPathParams = dataclasses.field()
    security: DownloadReportSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DownloadReportResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    download_report_401_application_json_any: Optional[Any] = dataclasses.field(default=None)
    download_report_404_application_json_any: Optional[Any] = dataclasses.field(default=None)
    
