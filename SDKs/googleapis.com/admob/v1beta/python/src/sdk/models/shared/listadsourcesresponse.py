import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adsource as shared_adsource


@dataclass_json
@dataclasses.dataclass
class ListAdSourcesResponse:
    r"""ListAdSourcesResponse
    Response for the ListAdSourcesRequest.
    """
    
    ad_sources: Optional[list[shared_adsource.AdSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adSources') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
