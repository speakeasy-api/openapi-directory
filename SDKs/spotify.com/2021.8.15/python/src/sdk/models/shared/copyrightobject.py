import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CopyrightObject:
    r"""CopyrightObject

    https://developer.spotify.com/documentation/web-api/reference/#object-copyrightobject - Find more info on the official Spotify Web API Reference
    """
    
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
