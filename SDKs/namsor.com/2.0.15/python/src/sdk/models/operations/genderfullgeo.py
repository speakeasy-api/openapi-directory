import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import personalnamegenderedout as shared_personalnamegenderedout


@dataclasses.dataclass
class GenderFullGeoPathParams:
    country_iso2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    full_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fullName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GenderFullGeoSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GenderFullGeoRequest:
    path_params: GenderFullGeoPathParams = dataclasses.field()
    security: GenderFullGeoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GenderFullGeoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    personal_name_gendered_out: Optional[shared_personalnamegenderedout.PersonalNameGenderedOut] = dataclasses.field(default=None)
    
