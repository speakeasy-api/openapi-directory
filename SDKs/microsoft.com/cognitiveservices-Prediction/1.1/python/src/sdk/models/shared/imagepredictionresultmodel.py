import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import imagetagpredictionmodel as shared_imagetagpredictionmodel


@dataclass_json
@dataclasses.dataclass
class ImagePredictionResultModel:
    r"""ImagePredictionResultModel
    result of an image prediction request
    """
    
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    iteration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iteration') }})
    predictions: Optional[list[shared_imagetagpredictionmodel.ImageTagPredictionModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Predictions') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Project') }})
    
