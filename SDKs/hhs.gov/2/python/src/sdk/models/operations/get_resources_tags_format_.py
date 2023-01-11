import dataclasses
from typing import Optional
from ..shared import tagmarshallerwrapped as shared_tagmarshallerwrapped


@dataclasses.dataclass
class GetResourcesTagsFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsFormatQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    media_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mediaId', 'style': 'form', 'explode': False }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': False }})
    name_contains: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nameContains', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    type_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'typeId', 'style': 'form', 'explode': False }})
    type_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'typeName', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsFormatRequest:
    path_params: GetResourcesTagsFormatPathParams = dataclasses.field()
    query_params: GetResourcesTagsFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesTagsFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_marshaller_wrappeds: Optional[list[shared_tagmarshallerwrapped.TagMarshallerWrapped]] = dataclasses.field(default=None)
    
