import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import animation as shared_animation
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class Overlay:
    r"""Overlay
    Overlay configuration.
    """
    
    animations: Optional[list[shared_animation.Animation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('animations') }})
    image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    
