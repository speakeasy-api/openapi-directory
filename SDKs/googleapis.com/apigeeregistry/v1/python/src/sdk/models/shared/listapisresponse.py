import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api as shared_api


@dataclass_json
@dataclasses.dataclass
class ListApisResponse:
    r"""ListApisResponse
    Response message for ListApis.
    """
    
    apis: Optional[list[shared_api.API]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apis') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
