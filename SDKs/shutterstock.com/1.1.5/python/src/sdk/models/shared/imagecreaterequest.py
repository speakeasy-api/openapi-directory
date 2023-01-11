import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ImageCreateRequest:
    r"""ImageCreateRequest
    Request to upload an image
    """
    
    base64_image: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('base64_image') }})
    
