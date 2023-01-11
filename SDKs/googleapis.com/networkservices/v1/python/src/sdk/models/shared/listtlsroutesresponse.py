import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tlsroute as shared_tlsroute


@dataclass_json
@dataclasses.dataclass
class ListTLSRoutesResponse:
    r"""ListTLSRoutesResponse
    Response returned by the ListTlsRoutes method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tls_routes: Optional[list[shared_tlsroute.TLSRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tlsRoutes') }})
    
