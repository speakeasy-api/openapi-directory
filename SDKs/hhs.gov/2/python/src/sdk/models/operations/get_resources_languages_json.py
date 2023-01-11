import dataclasses
from typing import Optional
from ..shared import languagewrapped as shared_languagewrapped


@dataclasses.dataclass
class GetResourcesLanguagesJSONQueryParams:
    max: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': False }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': False }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesLanguagesJSONRequest:
    query_params: GetResourcesLanguagesJSONQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourcesLanguagesJSONResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    language_wrappeds: Optional[list[shared_languagewrapped.LanguageWrapped]] = dataclasses.field(default=None)
    
