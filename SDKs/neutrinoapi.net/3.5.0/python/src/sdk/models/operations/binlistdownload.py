import dataclasses
from typing import Optional
from ..shared import apierror as shared_apierror


@dataclasses.dataclass
class BinListDownloadRequestBody:
    include_8digit: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'include-8digit' }})
    include_iso3: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'include-iso3' }})
    

@dataclasses.dataclass
class BinListDownloadRequest:
    request: Optional[BinListDownloadRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class BinListDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_error: Optional[shared_apierror.APIError] = dataclasses.field(default=None)
    bin_list_download_200_application_json_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
