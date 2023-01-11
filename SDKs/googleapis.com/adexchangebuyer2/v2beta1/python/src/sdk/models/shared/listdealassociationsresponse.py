import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import creativedealassociation as shared_creativedealassociation


@dataclass_json
@dataclasses.dataclass
class ListDealAssociationsResponse:
    r"""ListDealAssociationsResponse
    A response for listing creative and deal associations
    """
    
    associations: Optional[list[shared_creativedealassociation.CreativeDealAssociation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
