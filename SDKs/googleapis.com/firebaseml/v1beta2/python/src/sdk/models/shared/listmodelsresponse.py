import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import model as shared_model


@dataclass_json
@dataclasses.dataclass
class ListModelsResponse:
    r"""ListModelsResponse
    The response for list models
    """
    
    models: Optional[list[shared_model.Model]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('models') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
