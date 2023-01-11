import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import redownloadvideo as shared_redownloadvideo
from ..shared import url as shared_url


@dataclasses.dataclass
class DownloadVideosPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadVideosSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DownloadVideosRequest:
    path_params: DownloadVideosPathParams = dataclasses.field()
    request: shared_redownloadvideo.RedownloadVideo = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: DownloadVideosSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DownloadVideosResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    url: Optional[shared_url.URL] = dataclasses.field(default=None)
    
