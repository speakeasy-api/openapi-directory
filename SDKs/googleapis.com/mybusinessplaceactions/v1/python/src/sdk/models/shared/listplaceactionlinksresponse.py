import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placeactionlink as shared_placeactionlink


@dataclass_json
@dataclasses.dataclass
class ListPlaceActionLinksResponse:
    r"""ListPlaceActionLinksResponse
    Response message for PlaceActions.ListPlaceActionLinks.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    place_action_links: Optional[list[shared_placeactionlink.PlaceActionLink]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeActionLinks') }})
    
