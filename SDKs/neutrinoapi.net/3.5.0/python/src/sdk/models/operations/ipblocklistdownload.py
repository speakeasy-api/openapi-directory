import dataclasses
from typing import Optional
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class IPBlocklistDownloadRequestBody:
    format: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'format' }})
    include_vpn: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'include-vpn' }})
    

@dataclasses.dataclass
class IPBlocklistDownloadRequest:
    request: Optional[IPBlocklistDownloadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class IPBlocklistDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    ip_blocklist_download_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
