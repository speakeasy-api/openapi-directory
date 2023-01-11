import dataclasses
from typing import Optional
from ..shared import tagtypemarshallerwrapped as shared_tagtypemarshallerwrapped


@dataclasses.dataclass
class GetResourcesTagsTagTypesFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsTagTypesFormatRequest:
    path_params: GetResourcesTagsTagTypesFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesTagsTagTypesFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_type_marshaller_wrappeds: Optional[list[shared_tagtypemarshallerwrapped.TagTypeMarshallerWrapped]] = dataclasses.field(default=None)
    
