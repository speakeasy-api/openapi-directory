import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest
    Request to enable the Field.
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
