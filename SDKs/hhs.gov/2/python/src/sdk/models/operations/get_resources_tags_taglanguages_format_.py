import dataclasses
from typing import Optional
from ..shared import taglanguagemarshallerwrapped as shared_taglanguagemarshallerwrapped


@dataclasses.dataclass
class GetResourcesTagsTagLanguagesFormatPathParams:
    format: str = dataclasses.field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesTagsTagLanguagesFormatRequest:
    path_params: GetResourcesTagsTagLanguagesFormatPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesTagsTagLanguagesFormatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    tag_language_marshaller_wrappeds: Optional[list[shared_taglanguagemarshallerwrapped.TagLanguageMarshallerWrapped]] = dataclasses.field(default=None)
    
