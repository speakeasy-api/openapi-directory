import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleappsdrivelabelsv2betadatelimits as shared_googleappsdrivelabelsv2betadatelimits
from ..shared import googleappsdrivelabelsv2betaintegerlimits as shared_googleappsdrivelabelsv2betaintegerlimits
from ..shared import googleappsdrivelabelsv2betalongtextlimits as shared_googleappsdrivelabelsv2betalongtextlimits
from ..shared import googleappsdrivelabelsv2betaselectionlimits as shared_googleappsdrivelabelsv2betaselectionlimits
from ..shared import googleappsdrivelabelsv2betatextlimits as shared_googleappsdrivelabelsv2betatextlimits
from ..shared import googleappsdrivelabelsv2betauserlimits as shared_googleappsdrivelabelsv2betauserlimits


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaFieldLimits:
    r"""GoogleAppsDriveLabelsV2betaFieldLimits
    Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
    """
    
    date_limits: Optional[shared_googleappsdrivelabelsv2betadatelimits.GoogleAppsDriveLabelsV2betaDateLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateLimits') }})
    integer_limits: Optional[shared_googleappsdrivelabelsv2betaintegerlimits.GoogleAppsDriveLabelsV2betaIntegerLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerLimits') }})
    long_text_limits: Optional[shared_googleappsdrivelabelsv2betalongtextlimits.GoogleAppsDriveLabelsV2betaLongTextLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longTextLimits') }})
    max_description_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDescriptionLength') }})
    max_display_name_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDisplayNameLength') }})
    max_id_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdLength') }})
    selection_limits: Optional[shared_googleappsdrivelabelsv2betaselectionlimits.GoogleAppsDriveLabelsV2betaSelectionLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionLimits') }})
    text_limits: Optional[shared_googleappsdrivelabelsv2betatextlimits.GoogleAppsDriveLabelsV2betaTextLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textLimits') }})
    user_limits: Optional[shared_googleappsdrivelabelsv2betauserlimits.GoogleAppsDriveLabelsV2betaUserLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLimits') }})
    
