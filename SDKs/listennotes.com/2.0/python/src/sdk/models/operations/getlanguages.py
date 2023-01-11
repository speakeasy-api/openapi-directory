import dataclasses
from typing import Optional
from ..shared import getlanguagesresponse as shared_getlanguagesresponse


@dataclasses.dataclass
class GetLanguagesHeaders:
    x_listen_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLanguagesRequest:
    headers: GetLanguagesHeaders = dataclasses.field()
    

@dataclasses.dataclass
class GetLanguagesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_languages_response: Optional[shared_getlanguagesresponse.GetLanguagesResponse] = dataclasses.field(default=None)
    
