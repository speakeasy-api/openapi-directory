import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lien as shared_lien


@dataclass_json
@dataclasses.dataclass
class ListLiensResponse:
    r"""ListLiensResponse
    The response message for Liens.ListLiens.
    """
    
    liens: Optional[list[shared_lien.Lien]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('liens') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
