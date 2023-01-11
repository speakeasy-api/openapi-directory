import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customclass as shared_customclass


@dataclass_json
@dataclasses.dataclass
class ListCustomClassesResponse:
    r"""ListCustomClassesResponse
    Message returned to the client by the `ListCustomClasses` method.
    """
    
    custom_classes: Optional[list[shared_customclass.CustomClass]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customClasses') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
