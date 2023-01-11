import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import normalizedcoordinate as shared_normalizedcoordinate


@dataclass_json
@dataclasses.dataclass
class Image:
    r"""Image
    Overlaid jpeg image.
    """
    
    alpha: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alpha') }})
    resolution: Optional[shared_normalizedcoordinate.NormalizedCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
