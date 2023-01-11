import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetImagesPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetImagesIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"


@dataclasses.dataclass
class GetImagesQueryParams:
    include_licensed_content: Optional[GetImagesIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetImagesRequest:
    path_params: GetImagesPathParams = dataclasses.field()
    query_params: GetImagesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetImagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
