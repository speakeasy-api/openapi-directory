import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import image as shared_image


@dataclass_json
@dataclasses.dataclass
class FeatureDescription:
    r"""FeatureDescription
    A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.
    """
    
    headline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    image: Optional[shared_image.Image] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
