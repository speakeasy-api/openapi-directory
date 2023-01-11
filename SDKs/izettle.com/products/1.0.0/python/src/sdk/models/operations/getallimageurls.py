import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import libraryimagesresponse as shared_libraryimagesresponse


@dataclasses.dataclass
class GetAllImageUrlsPathParams:
    organization_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAllImageUrlsSecurity:
    zettle_api_key: Optional[shared_security.SchemeZettleAPIKey] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    zettle_oauth: Optional[shared_security.SchemeZettleOauth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetAllImageUrlsRequest:
    path_params: GetAllImageUrlsPathParams = dataclasses.field()
    security: GetAllImageUrlsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAllImageUrlsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    library_images_response: Optional[shared_libraryimagesresponse.LibraryImagesResponse] = dataclasses.field(default=None)
    
