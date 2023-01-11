import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publisherprofile as shared_publisherprofile


@dataclass_json
@dataclasses.dataclass
class ListPublisherProfilesResponse:
    r"""ListPublisherProfilesResponse
    Response message for profiles visible to the buyer.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    publisher_profiles: Optional[list[shared_publisherprofile.PublisherProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfiles') }})
    
