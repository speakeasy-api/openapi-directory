import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managedshortlink as shared_managedshortlink
from ..shared import dynamiclinkwarning as shared_dynamiclinkwarning


@dataclass_json
@dataclasses.dataclass
class CreateManagedShortLinkResponse:
    r"""CreateManagedShortLinkResponse
    Response to create a short Dynamic Link.
    """
    
    managed_short_link: Optional[shared_managedshortlink.ManagedShortLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedShortLink') }})
    preview_link: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previewLink') }})
    warning: Optional[list[shared_dynamiclinkwarning.DynamicLinkWarning]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warning') }})
    
