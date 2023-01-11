import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class ImageItemInput:
    r"""ImageItemInput
    An item containing an image.
    """
    
    image: Optional[shared_image.ImageInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    

@dataclass_json
@dataclasses.dataclass
class ImageItem:
    r"""ImageItem
    An item containing an image.
    """
    
    image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
