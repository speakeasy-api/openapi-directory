import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import personalnameparsedout as shared_personalnameparsedout


@dataclasses.dataclass
class ParseNamePathParams:
    name_full: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nameFull', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ParseNameSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ParseNameRequest:
    path_params: ParseNamePathParams = dataclasses.field()
    security: ParseNameSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ParseNameResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    personal_name_parsed_out: Optional[shared_personalnameparsedout.PersonalNameParsedOut] = dataclasses.field(default=None)
    
