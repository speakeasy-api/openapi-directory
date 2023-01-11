import dataclasses
from typing import Optional
from ..shared import languagewrapped as shared_languagewrapped


@dataclasses.dataclass
class GetResourcesLanguagesIDJSONPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesLanguagesIDJSONRequest:
    path_params: GetResourcesLanguagesIDJSONPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesLanguagesIDJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    language_wrappeds: Optional[list[shared_languagewrapped.LanguageWrapped]] = dataclasses.field(default=None)
    
