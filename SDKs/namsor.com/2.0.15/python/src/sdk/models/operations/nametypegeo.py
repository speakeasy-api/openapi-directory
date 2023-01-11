import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import propernouncategorizedout as shared_propernouncategorizedout


@dataclasses.dataclass
class NameTypeGeoPathParams:
    country_iso2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    proper_noun: str = dataclasses.field(metadata={'path_param': { 'field_name': 'properNoun', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class NameTypeGeoSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class NameTypeGeoRequest:
    path_params: NameTypeGeoPathParams = dataclasses.field()
    security: NameTypeGeoSecurity = dataclasses.field()
    

@dataclasses.dataclass
class NameTypeGeoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proper_noun_categorized_out: Optional[shared_propernouncategorizedout.ProperNounCategorizedOut] = dataclasses.field(default=None)
    
