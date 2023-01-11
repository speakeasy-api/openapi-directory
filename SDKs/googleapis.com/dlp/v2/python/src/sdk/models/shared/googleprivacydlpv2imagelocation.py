import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleprivacydlpv2boundingbox as shared_googleprivacydlpv2boundingbox


@dataclass_json
@dataclasses.dataclass
class GooglePrivacyDlpV2ImageLocation:
    r"""GooglePrivacyDlpV2ImageLocation
    Location of the finding within an image.
    """
    
    bounding_boxes: Optional[list[shared_googleprivacydlpv2boundingbox.GooglePrivacyDlpV2BoundingBox]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBoxes') }})
    
