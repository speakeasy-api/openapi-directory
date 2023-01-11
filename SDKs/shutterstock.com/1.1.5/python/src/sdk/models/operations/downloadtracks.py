import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import url as shared_url


@dataclasses.dataclass
class DownloadTracksPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadTracksSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DownloadTracksRequest:
    path_params: DownloadTracksPathParams = dataclasses.field()
    security: DownloadTracksSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DownloadTracksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    url: Optional[shared_url.URL] = dataclasses.field(default=None)
    
