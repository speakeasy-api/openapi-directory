import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import corridorout as shared_corridorout


@dataclasses.dataclass
class CorridorPathParams:
    country_iso2_from: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryIso2From', 'style': 'simple', 'explode': False }})
    country_iso2_to: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryIso2To', 'style': 'simple', 'explode': False }})
    first_name_from: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstNameFrom', 'style': 'simple', 'explode': False }})
    first_name_to: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstNameTo', 'style': 'simple', 'explode': False }})
    last_name_from: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastNameFrom', 'style': 'simple', 'explode': False }})
    last_name_to: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastNameTo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CorridorSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CorridorRequest:
    path_params: CorridorPathParams = dataclasses.field()
    security: CorridorSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CorridorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    corridor_out: Optional[shared_corridorout.CorridorOut] = dataclasses.field(default=None)
    
