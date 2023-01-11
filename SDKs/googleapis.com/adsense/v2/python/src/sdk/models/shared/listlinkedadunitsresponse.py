import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adunit as shared_adunit


@dataclass_json
@dataclasses.dataclass
class ListLinkedAdUnitsResponse:
    r"""ListLinkedAdUnitsResponse
    Response definition for the ad units linked to a custom channel list rpc.
    """
    
    ad_units: Optional[list[shared_adunit.AdUnit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adUnits') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
