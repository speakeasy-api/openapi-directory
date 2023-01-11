import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dynamiclinkwarning as shared_dynamiclinkwarning


@dataclass_json
@dataclasses.dataclass
class CreateShortDynamicLinkResponse:
    r"""CreateShortDynamicLinkResponse
    Response to create a short Dynamic Link.
    """
    
    preview_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewLink') }})
    short_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortLink') }})
    warning: Optional[list[shared_dynamiclinkwarning.DynamicLinkWarning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    
