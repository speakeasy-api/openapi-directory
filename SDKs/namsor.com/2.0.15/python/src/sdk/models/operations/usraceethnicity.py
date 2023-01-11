import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firstlastnameusraceethnicityout as shared_firstlastnameusraceethnicityout


@dataclasses.dataclass
class UsRaceEthnicityPathParams:
    first_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsRaceEthnicitySecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class UsRaceEthnicityRequest:
    path_params: UsRaceEthnicityPathParams = dataclasses.field()
    security: UsRaceEthnicitySecurity = dataclasses.field()
    

@dataclasses.dataclass
class UsRaceEthnicityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    first_last_name_us_race_ethnicity_out: Optional[shared_firstlastnameusraceethnicityout.FirstLastNameUsRaceEthnicityOut] = dataclasses.field(default=None)
    
