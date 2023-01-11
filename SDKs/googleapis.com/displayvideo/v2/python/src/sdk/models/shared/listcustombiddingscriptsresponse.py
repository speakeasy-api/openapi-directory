import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import custombiddingscript as shared_custombiddingscript


@dataclass_json
@dataclasses.dataclass
class ListCustomBiddingScriptsResponse:
    custom_bidding_scripts: Optional[list[shared_custombiddingscript.CustomBiddingScript]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customBiddingScripts') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
