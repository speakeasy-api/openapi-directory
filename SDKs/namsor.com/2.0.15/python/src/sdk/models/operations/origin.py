import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firstlastnameoriginedout as shared_firstlastnameoriginedout


@dataclasses.dataclass
class OriginPathParams:
    first_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OriginSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class OriginRequest:
    path_params: OriginPathParams = dataclasses.field()
    security: OriginSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OriginResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    first_last_name_origined_out: Optional[shared_firstlastnameoriginedout.FirstLastNameOriginedOut] = dataclasses.field(default=None)
    
