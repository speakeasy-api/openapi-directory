import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import redownloadimage as shared_redownloadimage
from ..shared import url as shared_url


@dataclasses.dataclass
class DownloadImagePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DownloadImageSecurity:
    customer_access_code: shared_security.SchemeCustomerAccessCode = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class DownloadImageRequest:
    path_params: DownloadImagePathParams = dataclasses.field()
    request: shared_redownloadimage.RedownloadImage = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: DownloadImageSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DownloadImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    url: Optional[shared_url.URL] = dataclasses.field(default=None)
    
