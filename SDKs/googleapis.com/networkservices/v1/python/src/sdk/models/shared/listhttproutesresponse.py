import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httproute as shared_httproute


@dataclass_json
@dataclasses.dataclass
class ListHTTPRoutesResponse:
    r"""ListHTTPRoutesResponse
    Response returned by the ListHttpRoutes method.
    """
    
    http_routes: Optional[list[shared_httproute.HTTPRoute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoutes') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
