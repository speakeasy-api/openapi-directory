import dataclasses
from typing import Optional
from ..shared import aspsp as shared_aspsp


@dataclasses.dataclass
class RetrieveAllSupportedAspspSInAGivenCountryQueryParams:
    country: str = dataclasses.field(metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RetrieveAllSupportedAspspSInAGivenCountryRequest:
    query_params: RetrieveAllSupportedAspspSInAGivenCountryQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RetrieveAllSupportedAspspSInAGivenCountryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aspsps: Optional[list[shared_aspsp.Aspsp]] = dataclasses.field(default=None)
    
