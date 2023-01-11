import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import status as shared_status
from ..shared import tooloutputreference as shared_tooloutputreference
from ..shared import thumbnail as shared_thumbnail


@dataclass_json
@dataclasses.dataclass
class Image:
    r"""Image
    An image, with a link to the main image and a thumbnail.
    """
    
    error: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    source_image: Optional[shared_tooloutputreference.ToolOutputReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceImage') }})
    step_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    thumbnail: Optional[shared_thumbnail.Thumbnail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    
