import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import throttlingsettings as shared_throttlingsettings


@dataclass_json
@dataclasses.dataclass
class SettingsChangeRequest:
    r"""SettingsChangeRequest
    New or updated webhook settings for an app.
    """
    
    target_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetUrl') }})
    throttling: shared_throttlingsettings.ThrottlingSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('throttling') }})
    
