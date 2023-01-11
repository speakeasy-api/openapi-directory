import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import prediction as shared_prediction
from ..shared import imageregion as shared_imageregion
from ..shared import imagetag as shared_imagetag


@dataclass_json
@dataclasses.dataclass
class ImagePerformance:
    r"""ImagePerformance
    Image performance model.
    """
    
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    predictions: Optional[list[shared_prediction.Prediction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictions') }})
    regions: Optional[list[shared_imageregion.ImageRegion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    tags: Optional[list[shared_imagetag.ImageTag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumbnail_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnailUri') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
