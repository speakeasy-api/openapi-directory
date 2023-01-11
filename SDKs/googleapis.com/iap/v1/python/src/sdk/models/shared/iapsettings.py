import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesssettings as shared_accesssettings
from ..shared import applicationsettings as shared_applicationsettings


@dataclass_json
@dataclasses.dataclass
class IapSettings:
    r"""IapSettings
    The IAP configurable settings.
    """
    
    access_settings: Optional[shared_accesssettings.AccessSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessSettings') }})
    application_settings: Optional[shared_applicationsettings.ApplicationSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationSettings') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
