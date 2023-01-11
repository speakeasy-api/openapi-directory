import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import personalnamegeoout as shared_personalnamegeoout


@dataclasses.dataclass
class CountryPathParams:
    personal_name_full: str = dataclasses.field(metadata={'path_param': { 'field_name': 'personalNameFull', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CountrySecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class CountryRequest:
    path_params: CountryPathParams = dataclasses.field()
    security: CountrySecurity = dataclasses.field()
    

@dataclasses.dataclass
class CountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    personal_name_geo_out: Optional[shared_personalnamegeoout.PersonalNameGeoOut] = dataclasses.field(default=None)
    
