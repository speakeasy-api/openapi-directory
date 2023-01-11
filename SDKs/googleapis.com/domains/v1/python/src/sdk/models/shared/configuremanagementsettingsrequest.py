import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import managementsettings as shared_managementsettings


@dataclass_json
@dataclasses.dataclass
class ConfigureManagementSettingsRequestInput:
    r"""ConfigureManagementSettingsRequestInput
    Request for the `ConfigureManagementSettings` method.
    """
    
    management_settings: Optional[shared_managementsettings.ManagementSettingsInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementSettings') }})
    update_mask: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
