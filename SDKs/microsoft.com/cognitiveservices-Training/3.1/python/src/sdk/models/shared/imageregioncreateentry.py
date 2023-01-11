import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImageRegionCreateEntry:
    r"""ImageRegionCreateEntry
    Entry associating a region to an image.
    """
    
    height: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    image_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    left: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    tag_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagId') }})
    top: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    width: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
