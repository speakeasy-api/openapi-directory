import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributes as shared_attributes
from ..shared import boundingbox as shared_boundingbox


@dataclass_json
@dataclasses.dataclass
class OcrResult:
    r"""OcrResult
    Array of probabilities for the prediction.
    """
    
    attributes: Optional[shared_attributes.Attributes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    probability: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probability') }})
    
