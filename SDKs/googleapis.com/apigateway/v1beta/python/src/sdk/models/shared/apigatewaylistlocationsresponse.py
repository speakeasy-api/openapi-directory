import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apigatewaylocation as shared_apigatewaylocation


@dataclass_json
@dataclasses.dataclass
class ApigatewayListLocationsResponse:
    r"""ApigatewayListLocationsResponse
    The response message for Locations.ListLocations.
    """
    
    locations: Optional[list[shared_apigatewaylocation.ApigatewayLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
