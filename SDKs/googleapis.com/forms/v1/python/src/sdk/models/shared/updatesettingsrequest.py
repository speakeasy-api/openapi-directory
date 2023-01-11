import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import formsettings as shared_formsettings


@dataclass_json
@dataclasses.dataclass
class UpdateSettingsRequest:
    r"""UpdateSettingsRequest
    Update Form's FormSettings.
    """
    
    settings: Optional[shared_formsettings.FormSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
