import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import firstlastnamediasporaedout as shared_firstlastnamediasporaedout


@dataclasses.dataclass
class DiasporaPathParams:
    country_iso2: str = dataclasses.field(metadata={'path_param': { 'field_name': 'countryIso2', 'style': 'simple', 'explode': False }})
    first_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'firstName', 'style': 'simple', 'explode': False }})
    last_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'lastName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DiasporaSecurity:
    api_key: shared_security.SchemeAPIKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DiasporaRequest:
    path_params: DiasporaPathParams = dataclasses.field()
    security: DiasporaSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DiasporaResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    first_last_name_diasporaed_out: Optional[shared_firstlastnamediasporaedout.FirstLastNameDiasporaedOut] = dataclasses.field(default=None)
    
