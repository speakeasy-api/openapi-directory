import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafieldselectionoptionschoice as shared_googleappsdrivelabelsv2betafieldselectionoptionschoice


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput
    Request to create a Selection Choice.
    """
    
    choice: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptionschoice.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choice') }})
    field_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldId') }})
    
