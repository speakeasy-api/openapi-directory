import dataclasses
from typing import Optional
from ..shared import supportedcountriesresponse as shared_supportedcountriesresponse


@dataclasses.dataclass
class ListSupportedCountriesV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supported_countries_response: Optional[shared_supportedcountriesresponse.SupportedCountriesResponse] = dataclasses.field(default=None)
    
