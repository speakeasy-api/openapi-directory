import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetSegmentPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetSegmentIncludeLicensedContentEnum(str, Enum):
    YES = "yes"
    NO = " no"


@dataclasses.dataclass
class GetSegmentQueryParams:
    include_licensed_content: Optional[GetSegmentIncludeLicensedContentEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'includeLicensedContent', 'style': 'form', 'explode': True }})
    locale: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSegmentRequest:
    path_params: GetSegmentPathParams = dataclasses.field()
    query_params: GetSegmentQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSegmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
