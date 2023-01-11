import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import propernouncategorizedout as shared_propernouncategorizedout


@dataclasses.dataclass
class NameTypePathParams:
    proper_noun: str = dataclasses.field(metadata={'path_param': { 'field_name': 'properNoun', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NameTypeSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class NameTypeRequest:
    path_params: NameTypePathParams = dataclasses.field()
    security: NameTypeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class NameTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proper_noun_categorized_out: Optional[shared_propernouncategorizedout.ProperNounCategorizedOut] = dataclasses.field(default=None)
    
