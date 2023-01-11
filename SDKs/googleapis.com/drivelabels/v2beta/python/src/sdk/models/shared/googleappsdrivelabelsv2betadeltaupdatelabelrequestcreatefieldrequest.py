import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafield as shared_googleappsdrivelabelsv2betafield


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput
    Request to create a Field within a Label.
    """
    
    field: Optional[shared_googleappsdrivelabelsv2betafield.GoogleAppsDriveLabelsV2betaFieldInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    
