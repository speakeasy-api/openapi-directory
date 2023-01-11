import dataclasses
from typing import Optional
from ..shared import tagmarshallerwrapped as shared_tagmarshallerwrapped


@dataclasses.dataclass
class GetResourcesTagsIDRelatedFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsIDRelatedFormatQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsIDRelatedFormatRequest:
    path_params: GetResourcesTagsIDRelatedFormatPathParams = dataclasses.field()
    query_params: GetResourcesTagsIDRelatedFormatQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesTagsIDRelatedFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_marshaller_wrappeds: Optional[list[shared_tagmarshallerwrapped.TagMarshallerWrapped]] = dataclasses.field(default=None)
    
