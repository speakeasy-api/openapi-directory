import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mediaproperties as shared_mediaproperties


@dataclass_json
@dataclasses.dataclass
class ImageInput:
    r"""ImageInput
    Data representing an image.
    """
    
    alt_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    properties: Optional[shared_mediaproperties.MediaProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    source_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUri') }})
    

@dataclass_json
@dataclasses.dataclass
class Image:
    r"""Image
    Data representing an image.
    """
    
    alt_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altText') }})
    content_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentUri') }})
    properties: Optional[shared_mediaproperties.MediaProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    source_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceUri') }})
    
