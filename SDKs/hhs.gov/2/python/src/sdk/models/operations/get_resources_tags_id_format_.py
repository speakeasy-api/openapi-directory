import dataclasses
from typing import Optional
from ..shared import tagmarshallerwrapped as shared_tagmarshallerwrapped


@dataclasses.dataclass
class GetResourcesTagsIDFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsIDFormatRequest:
    path_params: GetResourcesTagsIDFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesTagsIDFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_marshaller_wrappeds: Optional[list[shared_tagmarshallerwrapped.TagMarshallerWrapped]] = dataclasses.field(default=None)
    
