import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PhotoControllerGetPhotoDownloadPathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PhotoControllerGetPhotoDownloadQueryParams:
    photo_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'photoID', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PhotoControllerGetPhotoDownloadRequest:
    path_params: PhotoControllerGetPhotoDownloadPathParams = dataclasses.field()
    query_params: PhotoControllerGetPhotoDownloadQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PhotoControllerGetPhotoDownloadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
