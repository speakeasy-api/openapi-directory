import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImageProcessingSettings:
    r"""ImageProcessingSettings
    Represents image preprocessing settings used by image augmentation.
    """
    
    augmentation_methods: Optional[dict[str, bool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('augmentationMethods') }, 'form': { 'field_name': 'augmentationMethods' }})
    
