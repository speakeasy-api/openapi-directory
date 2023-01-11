import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import prediction as shared_prediction


@dataclass_json
@dataclasses.dataclass
class SuggestedTagAndRegion:
    r"""SuggestedTagAndRegion
    Result of a suggested tags and regions request.
    """
    
    created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iteration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iteration') }})
    prediction_uncertainty: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictionUncertainty') }})
    predictions: Optional[list[shared_prediction.Prediction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predictions') }})
    project: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('project') }})
    
