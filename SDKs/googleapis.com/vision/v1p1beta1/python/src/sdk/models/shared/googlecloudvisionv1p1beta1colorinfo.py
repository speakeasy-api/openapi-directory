import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVisionV1p1beta1ColorInfo:
    r"""GoogleCloudVisionV1p1beta1ColorInfo
    Color information consists of RGB channels, score, and the fraction of the image that the color occupies in the image.
    """
    
    color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    pixel_fraction: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pixelFraction') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
