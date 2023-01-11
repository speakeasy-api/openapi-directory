import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formresponse as shared_formresponse


@dataclass_json
@dataclasses.dataclass
class ListFormResponsesResponse:
    r"""ListFormResponsesResponse
    Response to a ListFormResponsesRequest.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    responses: Optional[list[shared_formresponse.FormResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    
