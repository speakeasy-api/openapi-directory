import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firstlastnamegenderedout as shared_firstlastnamegenderedout


@dataclasses.dataclass
class GenderPathParams:
    first_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenderSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderRequest:
    path_params: GenderPathParams = dataclasses.field()
    security: GenderSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GenderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    first_last_name_gendered_out: Optional[shared_firstlastnamegenderedout.FirstLastNameGenderedOut] = dataclasses.field(default=None)
    
