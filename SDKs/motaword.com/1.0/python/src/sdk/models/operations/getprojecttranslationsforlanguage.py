import dataclasses
from typing import Optional
from ..shared import stringlist as shared_stringlist


@dataclasses.dataclass
class GetProjectTranslationsForLanguagePathParams:
    language: str = dataclasses.field(metadata={'path_param': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectTranslationsForLanguageRequest:
    path_params: GetProjectTranslationsForLanguagePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectTranslationsForLanguageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    string_list: Optional[shared_stringlist.StringList] = dataclasses.field(default=None)
    
