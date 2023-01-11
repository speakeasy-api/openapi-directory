import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import webfont as shared_webfont


@dataclass_json
@dataclasses.dataclass
class WebfontList:
    r"""WebfontList
    Response containing the list of fonts currently served by the Google Fonts API.
    """
    
    items: Optional[list[shared_webfont.Webfont]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
