import dataclasses
from typing import Optional
from ..shared import countryviewmodel as shared_countryviewmodel


@dataclasses.dataclass
class GetConsumerV1CustomersCountriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    country_view_models: Optional[list[shared_countryviewmodel.CountryViewModel]] = dataclasses.field(default=None)
    
