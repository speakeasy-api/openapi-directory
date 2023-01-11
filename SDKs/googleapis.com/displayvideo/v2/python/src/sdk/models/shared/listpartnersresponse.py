import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partner as shared_partner


@dataclass_json
@dataclasses.dataclass
class ListPartnersResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    partners: Optional[list[shared_partner.Partner]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partners') }})
    
