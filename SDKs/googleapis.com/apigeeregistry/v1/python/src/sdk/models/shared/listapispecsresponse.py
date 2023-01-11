import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import apispec as shared_apispec


@dataclass_json
@dataclasses.dataclass
class ListAPISpecsResponse:
    r"""ListAPISpecsResponse
    Response message for ListApiSpecs.
    """
    
    api_specs: Optional[list[shared_apispec.APISpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiSpecs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
