import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betafielddateoptions as shared_googleappsdrivelabelsv2betafielddateoptions
from ..shared import googleappsdrivelabelsv2betafieldselectionoptions as shared_googleappsdrivelabelsv2betafieldselectionoptions
from ..shared import googleappsdrivelabelsv2betafielduseroptions as shared_googleappsdrivelabelsv2betafielduseroptions


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput
    Request to change the type of a Field.
    """
    
    date_options: Optional[shared_googleappsdrivelabelsv2betafielddateoptions.GoogleAppsDriveLabelsV2betaFieldDateOptionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    selection_options: Optional[shared_googleappsdrivelabelsv2betafieldselectionoptions.GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    user_options: Optional[shared_googleappsdrivelabelsv2betafielduseroptions.GoogleAppsDriveLabelsV2betaFieldUserOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    
