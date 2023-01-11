import dataclasses
from typing import Optional
from ..shared import supportedcountriesresponsev2 as shared_supportedcountriesresponsev2


@dataclasses.dataclass
class ListSupportedCountriesV2Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    supported_countries_response_v2: Optional[shared_supportedcountriesresponsev2.SupportedCountriesResponseV2] = dataclasses.field(default=None)
    
