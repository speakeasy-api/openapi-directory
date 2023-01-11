import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import placeactiontypemetadata as shared_placeactiontypemetadata


@dataclass_json
@dataclasses.dataclass
class ListPlaceActionTypeMetadataResponse:
    r"""ListPlaceActionTypeMetadataResponse
    Response message for PlaceActions.ListPlaceActionTypeMetadata.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    place_action_type_metadata: Optional[list[shared_placeactiontypemetadata.PlaceActionTypeMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeActionTypeMetadata') }})
    
